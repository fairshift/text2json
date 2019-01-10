
/*

  Tokenization functions
  ... stackoverflow.com/questions/27331819/whats-the-difference-between-a-character-a-code-point-a-glyph-and-a-grapheme
*/



// Working through delimiters from larger to smaller structural differences
export const divideExpressions = (string) => {


  // » · « (middle dot, interpunct) or »∙« (bullet operator)
  //  ... isn't multiplication (= a·b)


  // Equality



  // 



  var arr = string.split(". ");
  if(string.charAt(". ")){

  }


  if( )
  // » : « is present: what comes before is describing type, after comes a list
  // » ; « is present: » , « is not a string delimiter
}


export const passThroughRegex = (string, regexArray, returnBeforeEmpty = true) => {
  if( _.isArray(regexArray) && string.length ){

    var result = string;

    forEach(regexArray, (rule) => {
      var temp = result.Match(rule);

      if(temp){
        result = temp; // !!! revisit: temp[0] or temp[1]?
      } else {
        return result;
      }
    });
    
    return result;
  }

  return null;
}


export const getBeforeFirstComma = (string) => {
  let arr = string.split(',');
  return arr[0];
}


export const Equality = (input) => {

// [expression_1] = [expression_2] or
// [expression_1] (= [expression_2])

}


export const Colon = (input) => {

// [expression_1]: [expression_2]
//  expression_1 describes type
//  expression_2 is a list or a citation
// ... isn't a comparison (= a : b) or division (= a:b)

}


export const Dating = (input) => {

/*
  "12. 12. 2018"
  "11.2018"
  "11.12"
  "11/9"
  "11/9/2018"
*/

// May produce ambiguous or un-ambiguous result

}


export const Comment = (input) => {

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



/*

  Standard types

*/

export const months = [
  'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'a*g', 'sep', 'o*t', 'nov', 'dec'
]



/*

  

export const regexParentheses = new RegExp('/\(([^)]+)\)/')
/* Breakdown:

    \( : match an opening parentheses
    ( : begin capturing group
    [^)]+: match one or more non ) characters
    ) : end capturing group
    \) : match closing parentheses
*/

export const regexSquareBrackets = new RegExp('\[(.*?)\]')