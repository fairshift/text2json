
export default DateTime

export const DateTime = (input) => {

/*
  "12. 12. 2018"
  "11.2018"
  "11.12"
  "11/9"
  "11/9/2018"
*/

// May produce ambiguous or un-ambiguous result

  return {
    inside: null,
    pre: null,
    post: null
  }
}
