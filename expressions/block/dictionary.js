/*

  Functionable types (test or split) [!!!]

*/

export { DictionaryMatch }


import { expressionArgs_schema } from '../../fn.expressions'

import _ from 'lodash'


const DictionaryMatch = (args, schema = expressionArgs_schema) => {

  schema.push({
    // …
  })

  args = _.merge(schema, args);

/*
  if(args.expectedData){

    // medium.com/quick-code/data-structures-traversing-trees-9473f6d9f4ef
    return {

      createObjects: [
        { regex: new RegExp('/^\((.*)\) (.*) *$/gmi') },
        {
          'parseTree': {o} // type, limit, structure pointer, sequential condition
        }
        { tree: {
          left: 2,
          right: 2,
          previous: 2,
          next: 1
        } }
      ]
    }

  }
}

  return {
    inside: null,
    pre: null,
    post: null
  }
*/
}