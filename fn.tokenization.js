
// [!!!]
//import { Paragraphs, Colon, DateTime, Comment } from './expressions'
import { BulletpointList } from './expressions/UnorderedList'

import { replaceKeys, removeMarginalOccurence } from './fn.util'

import _ from 'lodash'


/*

  Tokenization functions

  Researching at the moment:
  — trie data structures with "triejs" package (unresolved how-to and why: export a trie data structure, generated)
  — parallel regex with "regexgen" from trie data structures
  … stackoverflow.com/questions/27331819/whats-the-difference-between-a-character-a-code-point-a-glyph-and-a-grapheme

*/
export {
  tokenizeStr,
  delimitingFlat, delimitingTree
}

// Default token types/expressions
const expressions = {  // [!!!] Replace dummy variable values with expressions
  p: "Paragraphs",
  ul: "BulletPoints",
  colon: "Colon",
  t: "DateTime",
  comment: "Comment"
}



// Document flow — top level function
const tokenizeStr = ( string, customBindings = {}, db ) => {

  var bindings = replaceKeys(expressions, customBindings)

  bindings.forEach((fn) => {

    db.get('tokens')
    .push({ id: 1, title: 'lowdb is awesome'})
    .write()
  })

  var tokens = [] // [!!!]

  // Informed by... ["beer", "Grimes - Genesis", "Brief glimpse into a game; reference @JeKe"]
  tokens = _.sort(tokens, [
    (o, element) => { // [!!!]

      // How the document is structured...
      /*
        if( element.delimiting == '3' ){ // hierarchical

          
        } else { // default: flat


        }
      */

      var rank = {
        // …
      }

      return rank[element]
    }
  ])

}


// [!!!] Revisit code
// Delimiting by breaking input into a flat array
const delimitingFlat = ( args ) => {

  var input = args.input,
      delimiters = args.delimiters,
      returnBoolean = args.returnBoolean,

      round = 0, // Round
      r,         
      buffer = [],

      results = [];

  input = input.trim();

  delimiters.forEach( (key_delimiter, delimiter) => {


    // Consider delimiter array (such as parentheses,  brackets)

    if( delimiter.isArray ){

      buffer['pre'] = input.split(delimiter[0])
      buffer['post'] = input.split(delimiter[1])

      // buffer … [!!!]
    }

    r++; // Describe …

    for ( var i = 1, linebreaks; i <= linebreaks; i++ ){
      // delimiters[key_delimiter] += delimiter; // [!!!]
    }

    input = removeMarginalOccurence( input, delimiters[key_delimiter] );

    if( returnBoolean == true ){
      /*
      if( input.indexOf( delimiters[key] )){

        buffer[ delimiters[key] ] = true;
      }
      */
    } else {

      if( r == 1 ){

        // results = input.split( delimiters[key] ); // [!!!]

      } else {

        i = 0;
        results.forEach( (key, element) => {

          i++;
          if(element.length){

            buffer.push( element.split( delimiters[key] )); // chemistry & physics
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
const delimitingTree = (args) => {

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