


// Validation functions and integrations

const passThroughRegex = (string, regexArray, returnBeforeEmpty = true) => {
  
  if( _.isArray(regexArray) && string.length ){

    var result = string;

    forEach(regexArray, (rule) => {
      var temp = result.Match(rule);

      if(temp){
        result = temp; // !!! revisit: temp[0] or temp[1]?
      } else {
        return result;
      }
    });
    
    return result;
  }

  return null;
}