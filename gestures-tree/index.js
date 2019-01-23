// 

import { passField } from '../parser'
import { generateId_hashids, regexParentheses, regexSquareBrackets } from '../util'

// import { date } from '../tokenTypes'


export { invoke, config, parser }


/*

Start-up: initializing parser

*/

const invoke = {
  'gestures': {
    nearbyParagraphs: [ invokeConfig.nearbyParagraphs.before, invokeConfig.nearbyParagraphs.after ], // [-]
    sl_SL: [
    	{ s: 'Lep* gest*', '*_': '[Aa-Zz]' }
    ],
    en_EN: [
      { s: ['Fine', '||', 'Leap', 'gesture'] }
    ]
  }
}

const config = {
  caseSensitive: false,
  nearbyParagraphs: { 
    before: -1, after: 1 
  },
  parseText: { plugin: "markdown-it" }
}



/*

Run-time: parsing process definitions

*/

const parser = {

  config: {
    createTemporaryId__fn: generateId_hashids,
    delimiters: {
      flat: ['|', ';', '⋅', '·', '·', '・'],
      tree: {
        option_1: {
          'key': '{{delimiter}}'
        }
      }
    }
    trim: 'auto' // otherwise use .trim() on output in 'js' objects, and __trim on keys left to parser
  },

  // Input provided by wider application context (outside of this "text2json" package)
  createContext: [ // Expect input to be tied to user and group accounts
    'userId', 'entityId'
  ]
}



//
// JSON schema is found in "./schema.json"
//
/* ... and this is a drop from another place, to keep in mind JSON-LD

{
  "@context": "https://schema.org/docs/tree.jsonld",
  "id": "http://json-schema.org/draft-06/schema#",
  "@id": "http://dbpedia.org/resource/John_Lennon"
}

*/