

export {
  // From './util.js'
  expression_registerExtensions,
  expressionWrapper,
  evaluateArgs, 
  generateTokenId,
}


import shortid from 'shortid'
import _ from 'lodash'




// Expression wrapper function with …
/*

Common functionalities (with token database access)
	
	matching rules: 				<-
		match__stop,
		match__intersection,
		match__join
		… __join, __intersection expressions: leftmost, rightmost, uppermost, bottommost

	autoselect rules: 				<-
		autoselect__intersection
	
	afterTokenizing rules:  		<-
		afterTokenizing__document,
		arterTokenizing__ …
*/


const expressionWrapper = ( expressionFn, args_fromExpression = [] ) => {

	var wrappedExpr = {},
		runtimeFn = function( args_runtime ){

			var argsArray = _.merge(args_fromExpression, args_runtime)

	  		return (evaluateArgs(argsArray)) ?
	  				expressionFn( args_fromExpression, [], args_runtime ) :
	  				evaluateArgs(argsArray) // Return errors (somewhat inefficient line)
	}

	// Wrapped this way, insides of the following function won't run immediately, 
	// persisting references to "expressionFn" and "additionalArgs" until launched with ()
  	wrappedExpr = runtimeFn
	wrappedExpr.addArgs = ( args_fromParser ) => {

		// This is the same "runtimeFn" function, calling expression function
		// … would copy-paste it, if that functioned for the purpose of wrapping (doesn't)
  		return function( args_runtime = [] ){

			var argsArray = _.merge(args_fromExpression, args_fromParser args_runtime)

	  		return (evaluateArgs(argsArray)) ?
	  				expressionFn( args_fromExpression, args_fromParser, args_runtime ) :
	  				evaluateArgs(argsArray) // Return errors (duplicated line)
	  	}
  	}

  	return wrappedExpr
}


// Light-weight function, extending basic parser programmatic types with scenarios
// … to make faster accessing of certain subtypes of same expression type
const expression_initExtensions = (expressionFn, args_fromExtensions) => {

	var wrappedExpr = {}


	// Resolve default function call
	if( typeof args_fromExtensions.default === 'object' ){

		wrappedExpr = expressionWrapper( expressionFn, args_fromExtensions.default )
		
	} else if( typeof args_fromExtensions.default !== 'undefined' && args_fromExtensions.length ){

		// Shortcut scenario alias linked to key "default": "${scenarioAliasName}"
		wrappedExpr = expressionWrapper( expressionFn, args_fromExtensions[args_fromExtensions.default] )

	} else {

		wrappedExpr = expressionWrapper( expressionFn )
	}


	// Resolve additional shortcut scenarios
    _.map(exprExtensionObj, (shortcutKey, args) => {

    	if(typeof args !== 'object'){
    		args = exprExtensionObj[args] // returns args from another scenario
    	}

      	wrappedExpr[ shortcutKey ] = expressionWrapper( expressionFn, args )
    })


  	return wrappedExpr;
}



// Input control for expressions
// !!! revisit — requiredByMode, validation function and tree-traversing
const evaluateArgs = (args, requiredByMode = { match: [], test: [], expectedParams: [] }) => {


  // Two sources of arguments:
  // — input to function
  // — defined by function itself
  var mandatory = []
  errObj = {}


  // Expression route: "expectedParams" (to gather a list of expected arguments)
  if( typeof args.expectedParams !== 'undefined' && args.expectedParams == true ){

  	mandatory.push(requiredByMode.expectedParams)

  // Expression route: "test" (test-specific) 
  } else if( typeof args.test !== 'undefined' ){

    mandatory.push([
      'test', 'data', 'generateTokenId'
    ])
    mandatory.push(requiredByMode.test)

  // Expression route: undefined (= default parsing mode)
  } else {

    mandatory.push([
      'match', 'data', 'autoselect',
      'generateTokenId',
      'parserName', 'parserAbbr'
    ])
    mandatory.push(requiredByMode.match)
  }


  errObj = definedPass(args, mandatory, errObj)
  return (!errObj.length) ? true : errObj


  // Expression route: "expectedParams" (to gather a list of expected arguments)
  // … this might require a tree-traversing validating function (more expensive than "definedPass"),
  // which runs on initialization of each parser
  /*

    mandatory.push(requiredByMode.expectedParams)

  // Expression route: "test" (test-specific) 
  } else … 

  */
}


// Simplistic way of validation — check if all keys exist (in root of arguments object/array)
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
