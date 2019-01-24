
import ajv from 'ajv'   // Fast JSON schema validation package
                        // 19,197,152 weekly downloads on npmjs.com/ajv



export { schemaValidation, passThroughRegex }


const schemaValidation = (dataset, schemaJsonObject) => {

  var ajv = new Ajv({schemaId: 'id'});
  // If you want to use both draft-04 and draft-06/07 schemas:
  // var ajv = new Ajv({schemaId: 'auto'});
  //ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));

  var valid = ajv.addSchema(schemaJsonObject, 'mySchema')
                 .validate('mySchema', dataset);
  if (!valid) console.log(ajv.errorsText());

  return 'something'
}


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