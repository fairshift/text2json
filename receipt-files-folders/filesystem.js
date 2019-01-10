
import { tokenize } from '../tokenization'
import { getNumberType } from '../util'

const extrapolateFilenamePatterns = (filename) => {

  /*
  (5.) [gas_station] Petrol
  (12. 12. 2018)
  (11.2018) MIKK [culture_centre]
  (11.'18) [culture_centre] Kino Šiška
  (November 18th, 2018 ; November 15th, 2012 · Something)
  (Working my way through. November 15th, 2012)*/


  var inParentheses = filename.Match(/^.*(\(.*\)).*(\(.*\)*)/gm);
  var inBrackets = filename.Match(/^.*(\[.*\]).*/gm)




  return true
}

const expectedHierarchies = [
  {
    1: Y 
  },
  { 
    1: YM 
  },
  { 
    1: Y,
    2: M 
  },
  { 
    1: Y,
    2: M_String 
  }
]



const date = (input) => {


}

// Year variations
const Y = (input) => {

  if( isInt(input)  ){

    return ( numberType(input) == 'int' ) ? { year: input } : null
  } else {

    var apostrophe = "\u0027";

    if( input.charAt(0) == decodeURI(apostrophe) &&
        numberType( input.substr(1) ) == 'int' ){

      return { year: input.substr(1) }
    } else {
      return null
    }
  }
}

// Year and month variations
const YM = (input) => {
  input = input.trim();
  var arr = input.Match(/^([0-9]+)\ *(?=\;|\,)\ *(.*)/gmi);
  
  return ()
}

const 

const contextProvider = {
  fileaddress: ['^.*(?=d\.d\.|d\.o\.o)', 'remove', 'sl_SL']
  },
  receipts: {

  },
  resources: []
}


//
//  Folder structure*
/*
— 	Root folder
	- Year number (full number, since AD): contains single files
*/


import _ from 'lodash'
import {  diff_match_patch as dmp } from 'diff_match_patch' /*

          To compare two strings for similarity:

          dmp.levenshtein( dmp.diff_main( diff_main(text1, text2) ) )
*/


//
//  Form of a single file (which contains a month of receipts)
/*	

		Filename: "(11.'18) [pub, restaurant] Place (disambiguation).txt"
		— "(First parentheses)": Month and year of transcript
			— "First number.": [Number of month in a year].
			— "'Second number": '[Number of a year after 2000 (20 omitted / 2000 substracted)]
		— "[square_brackets]": Types of services provided, comma separated tags (in camelCase or low_dash)
		— "What isn't enclosed in any brackets": Name of place
		— "(Second parentheses)" optional: Declaration of disambiguation (eg. city, )

*/


const regexParentheses = new RegExp('/\(([^)]+)\)/')
/* Breakdown:

    \( : match an opening parentheses
    ( : begin capturing group
    [^)]+: match one or more non ) characters
    ) : end capturing group
    \) : match closing parentheses
*/
const regexSquareBrackets = new RegExp('\[(.*?)\]') /*
if not (?:\[(\w)+\s+\]|\[\s(\w)+\]|\[(\w)\])  // with specific cases
and not \[([^]]+)\]                           // where new lines in square brackets are accepted, too
*/

const regexTrim = new RegExp('[^ ].*[^ ]') // trim empty space on beginning and end of a string


//
//  Content of file
/*  

    Service provider: first line
    & Stores & address: line starts with "¹", "²", "³", ...

    Resources used: line starts with "— [", 
                    followed with [item_quantity] item_description: price_per_stores¹²³

    Receipts: line starts with 
*/
const serviceProvider = new RegExp('/^(.*)$/m') // first line
const stores = new RegExp('^(?:¹|²|³|⁴|⁵|⁶|⁷|⁸|⁹)\s.* *$')
const resources = new RegExp('(?:^— \[.*(\s+\+.*)+\s.*|^— \[.*)')
const receipts = new RegExp('^— \(.*')

const 

export const parseReceiptFiles = (paths = {}) => {


}

export const parseSampleFile = () => {

}
