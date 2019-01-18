
import { delimitingFlat, delimitingHierarchical } from 'tokenization'


/*

  Standard types

*/

export const monthsCaseInsensitive = [
  'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'a*g', 'sep', 'o*t', 'nov', 'de*'
]

export const dashExtended = [
  '-', '-', '—'
];



const Paragraphs = (input, linebreaks = 2, returnBoolean = false) => {

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

}

const BulletPoints = (input) => {

/*
  var delimiters = ["-", "-", "—"];

  return delimiting({
    input: input,
    condition_lineStart: delimiters,
    delimiters: delimiters,
    returnBoolean: returnBoolean
  });
*/

}

const Colon = (input) => {

// [expression_1]: [expression_2]
//  expression_1 describes type
//  expression_2 is a list or a citation
// ... isn't a comparison (= a : b) or division (= a:b)

}

const Date = (input) => {

/*
  "12. 12. 2018"
  "11.2018"
  "11.12"
  "11/9"
  "11/9/2018"
*/

// May produce ambiguous or un-ambiguous result

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

}


// Currently, "markdown-it" package does it better, for the most part
/*

  export Paragraphs, BulletPoints, Colon, Date, Comment, Equality
  
*/