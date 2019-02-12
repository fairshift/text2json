
export { invokeExpr, config }


// 

import { DictionaryMatch } from '../expressions'
import { generateId_hashids, regexParentheses, regexSquareBrackets } from '../util'



/*

Start-up: initializing parser ( using word)

*/

const invokeExpr = [

  {
    expr: DictionaryMatch,
    args: {
      conditions: {
        sl_SL: {
          'formal:_': [
           { s: 'lep*' },
           { s: 'gest*' }
          ],
          'prekmurščina:|': [
            { s: 'le*p*' },
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
  }

]


const config = {

  parser: { // Parsing process definitions
    createTemporaryId__fn: generateId_hashids,
    // Input provided by wider application context (outside of this "text2json" package)
    createContext: [ // Expect input to be tied to user and group accounts
      'userId', 'entityId'
    ],
    delimiters: {
      filename: { tree: [';', '-'] }
    },
    plugins: { parseText: "markdown-it" }
  },

  expressions: { // Expression default definitions
    trim: 'auto' // otherwise use .trim() on output in 'js' objects, and __trim on keys left to parser
    caseSensitive: false,
    nearby: { 
      flat: [-1, 1],
      tree: [-1, 1]
    },
    charReplacements: {
      '*_': '[Aa-Zz]',
      '+_': '[Aa-Zz]'
    } 
  },

  map: {
    schema: './schema.json'
  }
  /* ... and this is a drop from another place, to keep in mind JSON-LD

  {
    "@context": "https://schema.org/docs/tree.jsonld",
    "id": "http://json-schema.org/draft-06/schema#",
    "@id": "http://dbpedia.org/resource/John_Lennon"
  }

  */
}