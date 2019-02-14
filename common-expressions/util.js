

export { expressionWrapper, evaluateArgs, generateTokenId }


// Dizzy part (will have to pause work now) …
// Objectives to achive — wrap an extension with:
// — arguments validation
// — extend expression function (which is an object) with shortcut functions, bringing in additional arguments
const expressionExtension = (expressionFn, expressionExtension = null) => {

  if(expressionExtension){
    expressionExtension.forEach((key, fn) => {
      expressionFn[key] = expressionFn(expressionArgs_schema)
    })
  }

  return expressionFn;
}

const expressionWrapper = (expressionFn, extensionObj = null) => {

  if(extensionObj){
    expressionObj = expressionExtension(expressionFn, …)
  }

  // Wrapped function with validations and extensions
  var wrappedFn = (args) => {

  }

  return wrappedFn
}
// … Dizzy part



const evaluateArgs = (args, requiredByMode) => {


  // Two sources of arguments:
  // — input to function
  // — defined by function itself
  var mandatory = []
  err = {}


  // Expression route: "returnRequired" (exporting expected arguments to a calling function)
  if( typeof args.expectedByMode !== 'undefined' ) {

    mandatory.push(requiredByMode.expectedByMode)

  // Expression route: "test" (test-specific) 
  } else if( typeof args.test !== 'undefined' && args.test == true ){

    mandatory.push([
      'data', 'conditions', 'generateTokenId'
    ])
    mandatory.push(requiredByMode.test)

  // Expression route: default (parsing mode)
  } else {

    mandatory.push([
      'parserName', 'parserAbbr', 'exprAbbr',
      'data', 'conditions', 'generateTokenId'
    ])
    mandatory.push(requiredByMode.match)
  }


  err = definedPass(args, mandatory, errObj)
  return (!err.length) ? true : err
}


const definedPass = (args, checkKeys, errObj) => {

  checkKeys.forEach((key) => {
    if( typeof args[key] === 'undefined' ){
      errObj[key] = null
    }
  })

  return errObj
}


const generateTokenId = (documentId, parserAbbr, parserPckgVersion, exprAbbr, sequentialNum = 1, nonDefaultParams = {}) => {
  return
    shortid.seed(
      documentId+": "+
      parserAbbr+'.'+parserPckgVersion+'.'+
      expressionAbbr+'('+JSON.stringify(nonDefaultParams)+')'+'['+sequentialNum+']'
    )
}
