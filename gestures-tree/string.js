
import { defaultState, passField } from '../parser'
import { generateId_hashids, regexParentheses, regexSquareBrackets } from '../util'
import { OrganizationTypeAbbr } from './regex'


export const parserMappings = {

  receiveContext: ['userId'],

  createObjects: {

    // First line: 
    // main service provider's organization name (%1),
    // organization seat address (%2)
    'gestures': new RegExp('/^(?:\-|\-|\—) (.*) *$/gm'),

    createTemporaryId: {
      gestures: ['username', 'gesture'],
    }
  },

/*
  Start of data structure mappings
*/

  gestures: {

    createArrayOfObjects: {
      receiveObjectsFromParser: ['gestures'],
      objectsRecreateByDelimiters: [ {'gestures.1': [';']} ]
    },

    js: (args = defaultState) => {

////////////////////////////////////////

  var splice = {},
      result = {},
      regex = RegExp('/^.*[(.*)](.*) *$/gm'),
      name;

  if( splice = object.Match(regex) ){

    if( typeof object['1.1'] !== 'undefined' && splice = object['1.1'].split(regex) ){

      name = splice[1]
      object['1.1'] = splice[2];

    } else if( typeof object['1'] !== 'undefined' && splice = object['1'].split(regex) ){

      name = splice[1];
      object['1'] = splice[2];
    }
  }

  if(name)
    result.name__temporary = name;

  return {
    result: result,
    state: args
  }

////////////////////////////////////////

    },

    databaseTasks: { 
      findDuplicates: { // !!! strategies of migrating overlapping data: [ ]
        matchBy: ['name', 'gesture'],
        matchTolerancy: 0.05,
        matchResolveAutomaticly: false,
      },
      overwriteOnDiff: ['organization', 'city', 'address'],
    },
    /*
    userTasks: {
      confirm: true
    }
    */
  }
}


//
//  Contents of a typical file (containing receipts of one specific month)
/*  

    Service provider: first line
    & Stores & address: line starts with "¹", "²", "³", ...

    Resources used: line starts with "— [", 
                    followed with [item_quantity] item_description: price_per_stores¹²³

    Receipts: line starts with 
*/