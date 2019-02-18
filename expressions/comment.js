

const Comment = (input) => {

/*
  Version 1:
  [Expression] // [Comment]

  (spaces are optional)
*/

// Version 2:
// /* [Comment] */
// (spaces are optional)

/*
  Version 3:
  # [Comment] 

  (leading space is mandatory)
*/

// Version 3:
// ( [Comment] )
// (spaces are optional)
// new RegExp('/\(([^)]+)\)/')

  return {
    inside: null,
    pre: null,
    post: null
  }
}