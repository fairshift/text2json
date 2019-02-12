
import { delimitingFlat, delimitingHierarchical } from 'tokenization'
import { setTypeArgs } from 'util'

import shortid from 'shortid'

/*

  Type function input arguments "schema"

*/

export const expressionArgs = {
  exprAbbreviation: null,
  expectedDataSchema: null,
  inputs: null,
  generateTokenId: (documentId, parserAbbr, parserPckgVersion, exprAbbr, sequentialNum = 1, nonDefaultParams = {}) => {
    return
      shortid.seed(
        documentId+": "+
        parserAbbr+'.'+parserPckgVersion+'.'+
        expressionAbbr+'('+JSON.stringify(nonDefaultParams)+')'+'['+sequentialNum+']'
      )
  },
  test: false
}


/*

  Standard type definitions

*/

export const monthsCaseInsensitive = {
  latin: [ 'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'a+g', 'sep', 'o+t', 'nov', 'de+' ],
  cyrilic: [ ]
}

export const dashSymbols = [
  '-', '-', '—'
];

export const bulletPoints = [
  ''
]


/*

  Functionable types (test or split)

*/


const BulletPoints = (args, defaultState = typeArgs) => {

  defaultState.push({
    linebreaks: 2
  })

  args = setTypeArgs(args, defaultState);
  
  if(args.expectedDataSchema){

    // medium.com/quick-code/data-structures-traversing-trees-9473f6d9f4ef
    return {

      createObjects: [
        { regex: new RegExp('/^\((.*)\) (.*) *$/gmi') },
        {
          'parseTree': {o} // type, limit, structure pointer, sequential condition
        },
        tree: {
          left: 2,
          right: 2,
          previous: 2,
          next: 1
        }
    }
  }

  if(args.inputs !== null && typeof args.inputs.tree == 'object'){
    if(args.pointerKey){

    }
  }

/*
  var delimiters = ["-", "-", "—"];

  return delimiting({
    input: input,
    condition_lineStart: delimiters,
    delimiters: delimiters,
    returnBoolean: returnBoolean
  });
*/
  
  return {
    inside: null,
    pre: null,
    post: null
  }
}


const Paragraphs = (args, test = false) => {

  let defaultState = {
    linebreaks: 2,
    returnBoolean: false,
    nearbyParagraphs: []
  }

  const { test, input, linebreaks, returnBoolean } = typeSetInputOrDefault(args, defaultState);

  
  if(test){


  } else {


  }

/*
  var delimiters = ["\r\n", "<br/>", "<br />"], // <br> also possible, though invalid in more recent versions of HTML markup
      round = 0,
      buffer = [], 
      results = [];

  delimiters.forEach( (key_delimiter, delimiter) => {

    r++;

    for ( i = 1; i <= linebreaks; i++ ){
      delimiters[key] += value;
    }
  });

  return delimiting({
    input: input, 
    delimiters: delimiters,
    returnBoolean: returnBoolean
  });
*/
  return {
    inside: null,
    pre: null,
    post: null
  }
}


const Colon = (input) => {

// [expression_1]: [expression_2]
//  expression_1 describes type
//  expression_2 is a list or a citation
// ... isn't a comparison (= a : b) or division (= a:b)

  return {
    inside: null,
    pre: null,
    post: null
  }
}

const DateTime = (input) => {

/*
  "12. 12. 2018"
  "11.2018"
  "11.12"
  "11/9"
  "11/9/2018"
*/

// May produce ambiguous or un-ambiguous result

  return {
    inside: null,
    pre: null,
    post: null
  }
}

const Comment = (input) => {

/*
  Version 1:
  [Expression] // [Comment]

  (spaces are optional)
*/

// Version 2:
// /* [Comment] */
// (spaces are optional)

/*
  Version 3:
  # [Comment] 

  (leading space is mandatory)
*/

// Version 3:
// ( [Comment] )
// (spaces are optional)
// new RegExp('/\(([^)]+)\)/')

  return {
    inside: null,
    pre: null,
    post: null
  }
}


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