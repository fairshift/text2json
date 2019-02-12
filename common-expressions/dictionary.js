import { expressionArgs_schema } from 'expressions'


/*

  Functionable types (test or split)

*/

export { DictionaryMatch }


const DictionaryMatch = (args, expressionArgs_schema) => {

  let argsSchema = {
    expectedData: null,
    test: false,
    linebreaks: 2,
    inputs: null
  }

  args = typeSetInputOrDefault(args, defaultState);
  
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
}