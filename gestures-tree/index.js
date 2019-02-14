
export { match, invokeExpr, tokenize, map, config }


// 

import { DictionaryMatch, Paragraph, DateTime, Heading, Line, Sentence } from '../common-expressions'
import { generateId_hashids, regexParentheses, regexSquareBrackets } from '../util'



/*

Start-up: initializing parser ( using word)

*/


const transforms = {
  'user': [
    { 'context.user.userId':  },
    { from: }
  ]
}


const match = {

  'gesture': {
    expr: DictionaryMatch,
    args: {
      conditions: {
        sl_SL: {
          'formal:—': [
           { s: 'lep*' },
           { s: 'gest*' }
          ],
          'prekmurščina:|': [
            { s: 'le*p*' },
            { s: 'ge*st*' }
          ],
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
          ],
        },
        '*': {
          '#leapgest:|': [
            { s: ['#leapgest*'], '*_': '[a-z]' }
          ]
        }
      }
    }
  },

  'resource': {
    expr: DictionaryMatch,
    args: {
      conditions: {
        sl_SL: [''] // import dictionaries by array (should support RDF-JS ontologies)
      }
    }
  }
}

const invokeExpr = [ match['gesture'] ]

const tokenize = {

  'gesture': {
    keys: ['sl_SL.formal', 'sl_SL.prekmurščina:|', 'en_EN', '#leapgest'],
    extend: { 
      tree: [0, 1],
      flat: [-2, 2],
      expr: [Paragraph, BulletPoints],
      inBetween: {
        keys: ['']
      }
    },
    inBetween: {

    },
    'title': {
      // from: 'this', // may be omitted
      expr: [ Heading['topmost'], Line['1st'] ]
    },
    'description': {
      extend: { key: 'gesture.title', flat: [0, 1], expr: [Sentence] },
    }
  },
  'user': {
    from: ['context.user', 'gesture.description'],
  },
  'event.timestamp': {
    keys: [ 'gesture.description' ],
    expr: [ DateTime ]
  }
}

const map: = {
  'gesture': {
    // schema: 'gesture', // schema with same name may be omitted

  }
}


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
    plugins: [ "markdown-it" ]
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