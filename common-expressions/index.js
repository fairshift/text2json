

export {
  expressionArgs_schema,
  monthsCaseInsensitive, dashSymbols, bulletPoints
}



import shortid from 'shortid'



/*

  Type function input arguments "schema"

*/

const expressionArgs_schema = {
  parserName: null,
  parserAbbr: null,
  exprAbbreviation: null,
  conditions: [],
  inputs: {},
  test: false,
  generateTokenId: (documentId, parserAbbr, parserPckgVersion, exprAbbr, sequentialNum = 1, nonDefaultParams = {}) => {
    return
      shortid.seed(
        documentId+": "+
        parserAbbr+'.'+parserPckgVersion+'.'+
        expressionAbbr+'('+JSON.stringify(nonDefaultParams)+')'+'['+sequentialNum+']'
      )
  },
}


/*

  Standard type definitions

*/



const monthsCaseInsensitive = {
  latin: [ 'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'a+g', 'sep', 'o+t', 'nov', 'de+' ],
  cyrilic: [ ]
}

const dashSymbols = [
  '-', '-', '—'
];

const bulletPoints = [
  ''
]


//  Default functionable types with "expectSchema", "test" and "parse" functions
/*
  ./expressions/
    dictionary ; bulletpoint ; 
*/













// Notes to revisit, clean-up and reposition after more work is done

// Currently, "markdown-it" package does it better, for the most part
/*

  export Paragraphs, BulletPoints, Colon, Date, Comment, Equality
  
*/





/*

Short excercise... Bulletpoint parsing

      createObjects: [
        { regex: new RegExp('/^\((.*)\) (.*) *$/gmi') },
        {
          'parseTree': {o} // type or string, limit, structure pointer, sequential condition
        }
      },
      tree: {
        left: 2,
        right: 2,
        previous: 2,
        next: 1
      }

*/

// Here's the example content
/*

# Headline
- bulletpoint
  - indented bulletpoint
  - indented bulletpoint 1

    with paragraph
- bulletpoint
  with a paragraph

- bulletpoint

  with a paragraph

  - see how this is another level
  - or this

    with a paragraph

Paragraph without a bulletpoint
  - bulletpoint at a different indentation
- what is this?

*/

// Logic
/*

Indentation of first bulletpoint is 


*/