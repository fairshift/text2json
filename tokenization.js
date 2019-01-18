
/*

  Tokenization functions
  ... stackoverflow.com/questions/27331819/whats-the-difference-between-a-character-a-code-point-a-glyph-and-a-grapheme
*/


import { removeMarginalOccurence } from 'util'


// Delimiting by breaking input into a flat array
export const delimitingFlat = ( args ) => {

  var input = args.input,
      delimiters = args.delimiters,
      returnBoolean = args.returnBoolean,

      round = 0,
      buffer = [],

      results = [];

  input = input.trim();

  delimiters.forEach( (key_delimiter, delimiter) => {

    r++;

    for ( i = 1; i <= linebreaks; i++ ){
      delimiters[key] += value;
    }

    input = removeMarginalOccurence( input, delimiters[key] );

    if( returnBoolean == true ){
      if( input.indexOf( delimiters[key] )){

        buffer[ delimiters[key] ] = true;
      }

    } else {

      if( r == 1 ){

        results = input.split( delimiters[key] );

      } else {

        i = 0;
        results.forEach( (key, element) => {

          i++;
          if(element.length){

            buffer.push( element.split( delimiters[delimiter] )); // chemistry & physics
          }
        });

        results = buffer;
        buffer = [];
      }
    }
  });

  if( returnBoolean == true ){

    return (results.length) ? results.length : false;
  } else {

    return results;
  }
}


// Working through delimiters from a larger to a smaller structural differences
export const delimitingHierarchical = (args) => {

  var condition_lineStart = args.condition_lineStart,
      condition_lineEnd = args.condition_lineEnd;

  // » · « (middle dot, interpunct) or »∙« (bullet operator)
  //  ... isn't multiplication (= a·b)

  // Equality

  // » : « is present: what comes before is describing type, after comes a list
  // » ; « is present: » , « is not a string delimiter

  return true
}



// export const regexParentheses = new RegExp('/\(([^)]+)\)/')
/* Breakdown:

    \( : match an opening parentheses
    ( : begin capturing group
    [^)]+: match one or more non ) characters
    ) : end capturing group
    \) : match closing parentheses
*/

// export const regexSquareBrackets = new RegExp('\[(.*?)\]')