import { argsSchema } from 'types'

// Short excercise... Bulletpoint parsing with an example document
/*

# Headline
- first bulletpoint announces a list
  - indented bulletpoint
  - indented bulletpoint 1

    with paragraph
- bulletpoint
  with a paragraph

- bulletpoint

  with a paragraph

  - see how this is another level
  - or this

    with a paragraph

Paragraph without a bulletpoint
  - bulletpoint at a different indentation
- what is this? say it's actually another list

New paragraph

- spacing between bulletpoints


- This is also another list, because of spacing

*/

// Logic
/*

- Indentation of the first bulletpoint is standard to the following nodes
- If the next bulletpoint is indented to the left, relative to the current... 

*/




export const dashExtended = [
  '-', '-', '—'
];

export const BulletPoints = [
  ''
]


/*

  Functionable types (test or split)

*/


const BulletPoints = (args) => {

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


/*
  var delimiters = ["-", "-", "—"];

  return delimiting({
    input: input,
    condition_lineStart: delimiters,
    delimiters: delimiters,
    returnBoolean: returnBoolean
  });
*/
  
  return {
    inside: null,
    pre: null,
    post: null
  }
}