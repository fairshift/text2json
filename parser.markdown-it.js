
import { markdownItConfig } from './config.markdown-it.js'


// 1. Parser init (markdown-it)
export const mdParser = md(markdownItConfig);


// 2. Rendering replacements
export const hookMapping = (parser, md, mdRender = true) => {

/*
  


  Run some parallel process here: mapping functions, outputing data to parser object
  ... if there's some expression types better off tied to Markdown



*/
  
// Example function, bind to a hook
// From: markdown-it/docs/architecture.md
  const defaultRender = md.renderer.rules.image, 
        vimeoRE = /^https?:\/\/(www.)?vimeo.com\/(\d+)($|\/)/;

  md.renderer.rules.image = function (tokens, idx, options, env, self) { 

    var token = tokens[idx], aIndex = token.attrIndex('src');

    if (vimeoRE.test(token.attrs[aIndex][1])) {
      var id = token.attrs[aIndex][1].match(vimeoRE)[2];

      return (mdRender) ? defaultRender(tokens, idx, options, env, self) : null
      /*
      return '<div class="embed-responsive embed-responsive-16by9">\n' +
              '  <iframe class="embed-responsive-item" src="//player.vimeo.com/video/' + id + '"></iframe>\n' +
              '</div>\n';
      */
    };
  }
}