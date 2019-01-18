
import { defaultState } from '../parser'

import { tokenize } from '../tokenization'
import { getNumberType } from '../util'



export const parserMappings = {

  createObjects: {

    // First line: 
    // main service provider's organization name (%1),
    // organization seat address (%2)
    'events': new RegExp('/^(?:\-|\-|\—) (.*) *$/gm'), // This will need a custom function

    createTemporaryId: {
      events: ['name', 'timestamp']
    }
  },

/*
  Start of data structure mappings
*/

  events: {
    createArrayOfObjects: {
      receiveObjectsFromParser: ['events'],
      objectsRecreateByDelimiters: [ {'events.1': [';']} ]
    },

    js: (args = defaultState) => {

////////////////////////////////////////
	
	return { }

////////////////////////////////////////

    },
  }
}



//
//  Folder structure (tree elements)
/*
—   Root folder
  - Subfolder named as: Year number (full number, since AD) ‹ contains files, only
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