const Paragraphs = (args, test = false) => {

  let defaultState = {
    linebreaks: 2,
    returnBoolean: false,
    nearbyParagraphs: []
  }

  const { test, input, linebreaks, returnBoolean } = typeSetInputOrDefault(args, defaultState);

  
  if(test){


  } else {


  }

/*
  var delimiters = ["\r\n", "<br/>", "<br />"], // <br> also possible, though invalid in more recent versions of HTML markup
      round = 0,
      buffer = [], 
      results = [];

  delimiters.forEach( (key_delimiter, delimiter) => {

    r++;

    for ( i = 1; i <= linebreaks; i++ ){
      delimiters[key] += value;
    }
  });

  return delimiting({
    input: input, 
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