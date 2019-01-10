
/*
  
  Map to JSON
  
  Capture data flow from "markdown-it" between tokenization and rendering process
  ... at:

      [ 'table',      require('./rules_block/table'),      [ 'paragraph', 'reference' ] ],
      [ 'code',       require('./rules_block/code') ],
      [ 'fence',      require('./rules_block/fence'),      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
      [ 'blockquote', require('./rules_block/blockquote'), [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
      [ 'hr',         require('./rules_block/hr'),         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
      [ 'list',       require('./rules_block/list'),       [ 'paragraph', 'reference', 'blockquote' ] ],
      [ 'reference',  require('./rules_block/reference') ],
      [ 'heading',    require('./rules_block/heading'),    [ 'paragraph', 'reference', 'blockquote' ] ],
      [ 'lheading',   require('./rules_block/lheading') ],
      [ 'html_block', require('./rules_block/html_block'), [ 'paragraph', 'reference', 'blockquote' ] ],
✓...  [ 'paragraph',  require('./rules_block/paragraph') ]

*/



// 1. Parser init (markdown-it)

export const mdParser = md({
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                              // This is only for full CommonMark compatibility.
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                              // useful for external highlighters.
  linkify:      false,        // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’«»„“‚‘',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externaly.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) { return ''; }
});


// 2. Renderer replacement functions ()

export const hookMapping = (parser, md, mdRender = true) => {

  // From: markdown-it/docs/architecture.md
  const defaultRender = md.renderer.rules.image, 
      vimeoRE = /^https?:\/\/(www.)?vimeo.com\/(\d+)($|\/)/;

  md.renderer.rules.image = function (tokens, idx, options, env, self) { 

    var token = tokens[idx], aIndex = token.attrIndex('src');

    if (vimeoRE.test(token.attrs[aIndex][1])) {

      var id = token.attrs[aIndex][1].match(vimeoRE)[2];

/*
  


  Run parallel process here: mapping functions, outputing data to parser object



*/
    
    // md display process
    return (mdRender) ? defaultRender(tokens, idx, options, env, self) : null
    /*return '<div class="embed-responsive embed-responsive-16by9">\n' +
             '  <iframe class="embed-responsive-item" src="//player.vimeo.com/video/' + id + '"></iframe>\n' +
             '</div>\n';*/
    };
  }

    // pass token to default renderer. return defaultRender(tokens, idx, options, env, self); }; ```
}