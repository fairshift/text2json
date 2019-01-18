
import ajv from 'ajv'   // Fast JSON schema validation package
                        // 19,197,152 weekly downloads on npmjs.com/ajv


// Validation functions and integrations

export const passThroughRegex = (string, regexArray, returnBeforeEmpty = true) => {
  
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