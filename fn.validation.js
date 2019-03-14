
import _ from 'lodash'


// Additional validation functions and integrations (that aren't native to JSON schema)

const passThroughRegex = (string, regexArray, returnBeforeEmpty = true) => {
  

  if( _.isArray(regexArray) && string.length ){


    var result = string;

    regexArray.forEach((rule) => {
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