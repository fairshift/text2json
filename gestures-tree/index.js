// 

import { passField } from '../parser'
import { generateId_hashids, regexParentheses, regexSquareBrackets } from '../util'

// import { date } from '../tokenTypes'


export { invoke, config, parser }


/*

Start-up: initializing parser

*/

const invoke = {
  sl_SL: {
    'formal:_': [
  	 { s: 'lep*' },
     { s: 'gest*' }
    ],
    'prekmurščina:|': [
      {s: 'le*p*' },
      { s: 'ge*st*' }
    ]
  },
  en_EN: {
    'leap:|': [
      { s: ['Leap'], caseSensitive: true },
      { s: ['gesture+'] }
    ],
    'fine:3': [
      { l: ['fine', 'gesture+'] },
      { x: ['don\'t parse'] },
      { s: ['gesture+'] }
    ]
  },
  '*': {
    '#leapgest:|': [
      { s: ['#leapgest*'], '*_': '[a-z]' }
    ]
  },
//nearby: [ invokeConfig.nearby.flat, invokeConfig.nearby.tree ], // [-]
}

const config = {
  caseSensitive: false,
  nearby: { 
    flat: [-1, 1],
    left: [-1, 1]
  },
  charReplacements: {
    '*_': '[Aa-Zz]',
    '+_': '[Aa-Zz]'
  }
  parseText: { plugin: "markdown-it" }
}



/*


Run-time: parsing process definitions

*/

const parser = {

  config: {
    createTemporaryId__fn: generateId_hashids,
    delimiters: {
      filename: { tree: [';', '-'] }
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