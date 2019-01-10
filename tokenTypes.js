

export const Equality = (input) => {

// [expression_1] = [expression_2] or
// [expression_1] (= [expression_2])

}


export const Colon = (input) => {

// [expression_1]: [expression_2]
//  expression_1 describes type
//  expression_2 is a list or a citation
// ... isn't a comparison (= a : b) or division (= a:b)

}


export const Dating = (input) => {

/*
  "12. 12. 2018"
  "11.2018"
  "11.12"
  "11/9"
  "11/9/2018"
*/

// May produce ambiguous or un-ambiguous result

}


export const Comment = (input) => {

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

}