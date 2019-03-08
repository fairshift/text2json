
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


// Explanations online …
// Writing ISO 8601 Duration, Datetime, and Interval Values 
// support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm