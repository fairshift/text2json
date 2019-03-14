

export { validate, passThroughRegex }



import ajv from 'ajv' // Fast JSON schema validation package
// 19,197,152 weekly downloads on npmjs.com/ajv

import simpl from 'simpl-schema' // 




const validateSchema = (dataset, schemaObj, validationFn = jsonSchema_validate) => {

  return validationFn(dataset, schemaObj)
}


const jsonSchema_validate = (dataset, schemaJsonObject) => {

  var ajv = new Ajv({schemaId: 'id'});
  // If you want to use both draft-04 and draft-06/07 schemas:
  // var ajv = new Ajv({schemaId: 'auto'});
  //ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));

  var valid = ajv.addSchema(schemaJsonObject, 'mySchema')
                 .validate('mySchema', dataset);
  if (!valid){
    return ajv.errorsText()
  } console.log();

  return true
}

const simplSchema_validate = (dataset, schemaJsObject) => {

  // … not implemented yet
  return false
}
