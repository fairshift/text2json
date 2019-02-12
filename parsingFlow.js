
import _ from 'lodash'
import md from 'markdown-it'


export default parse
export {
	parse,

	// From previous disposition of code
	createArrayOfObjects,
		receiveObjectsFromParser, receivePropsFromParser, objectsRecreateByDelimiters,
	createTemporaryId,
	passField,
	mergeDatabaseTasks
}


const parseCollection_fns = 
[
	'mapExpressions',			// expressions from all parsers in one array (with references to parser components)
	'receiveContext',			// receive context from application container

	'forEach(documents)',		// parse one document or loop through documents in filesystem
		'filesystem',			// custom parser filesystem.js script
			'tokenize',			// run through string and expressions, using context when so defined (in expressions)
			'toContext',		// add tokens to context (= mapping some tokens in a more accessible object)
		'document',				// custom parser document.js script
			'tokenize'			// 

	// Tokenize flow
	'tokenize', 				// string splitting wrapper function — match sequence of conditions and build an array of potential matches
		'matchExpressions',		// loop …
			'nextMatch',		// find 1st following match for any potential expressions (1st conditions first …)
								// remove expressions without a match
								// create array of potentially matching expressions
								// sort array by occurence
								// repeat
			'scoop',			// push content to tokens (with optional nearby content)
		'createTokens',			// create tokens where there's no ambiguities
		'createScenarios',		// create various scenarious where there's multiple possibilities 
								//(to resolve by user / admin input)
		'parserSignatures',		// append signatures of active parsers (??? think through validation)

	// Mapping flow — run to reduce schema-validated scenarios, then run again with user or admin input
	'mapTokensToSchema',		// token to JSON schema mapping wrapper function
		'loadSchema',			// load schemas for each parser
		'findTokens',			// find tokens in array of objects for each schema (top-most property is collection/table) 
		'tokensToSchema',		// loop through matching tokens for each schema
			'transform',		// transform functions
			'map',				// to schema
			'validate',			// which scenarios match schema

	/*	'createArrayOfObjects': [
			'receiveObjectsFromParser', 'objectsRecreateByDelimiters', 
			'receivePropsFromParser', 'addToContext'
		],
		'*',
		'*__temporary',
		'js',
	'databaseTasks',
	'validate'*/
];

const parse = (parserName, args) => {

	var config = {};
	var context = {};
	var mapObjects = {};
	var jsonDataObject = {};

	// args: caption, text, ...
	// diff... !!!
	if(typeof args.text === 'undefined' || !args.text){
		return null
	}

	var reserved = ['parserConfig', 'createContext', 'createObjects'];

  try {
    schema = require('./'+parserName)(parserMappings)

    config = schema.createConfig;
   	context.ext = _.map(schema.receiveContext, function(key, value){

   		if(typeof args[key] !== 'undefined'){

   			var obj[key] = args[key];
   			return obj;
   		}
    });
  

// This process can be understood in context of document flow — decomposed to paragraphs or others units of expression
//
// Persistent data sets should be informingreceivePropsFromParser functions: 
// - mapObjects (collections & objects to parse)
// - jsonDataObject (dataset to return)
// - databaseTasks (list of tasks to perform in wider application container, outside of text2json package)
//
/*

  	objectsMap = _.map(schema.createObjects, function(collection, Regex){

  		var obj[collection] = Regex.Match(args.text);
  		return obj;
  	});

		objectsCache = _.map(schema, function(collection, toRender){ // !!!
			
			if(reserved.indexOf(collection) == -1){

				var cache = {};
				var currentObject = {};

				_.forEach(parseCollection_steps, (step) => {
				  switch (step) {

				    default:
				    	return
				}

				return buildCollections;
			}
  	})

*/

  } catch(ex){
  	return null
  }
}


// Function creates IDs, depending on configuration
export const createArrayOfObjects = (collection, object, config, context, objectsMap) => {

	_.map(object, (key, arr) => {

		var obj = {};


	  switch (key) {

	    case 'addToContext':
	      cache[collection].push( createArrayOfObjects(objectsMap, collection, toRender[step]) )
	      return

	    case 'receiveObjectsFromParser':
	      cache[collection].push( createArrayOfObjects(objectsMap, collection, toRender[step]) )
	      return

	    case 'objectsRecreateByDelimiters':
	      cache[collection].push( createArrayOfObjects(objectsMap, collection, toRender[step]) )
	      return

	    case 'receivePropsFromParser':
	      cache[collection].push( createArrayOfObjects(objectsMap, collection, toRender[step]) )
	      return

	    default:
	    	return true
		}
	});

	return true
}

export const receiveObjectsFromParser = (objectsMap, keys) => {

	if(keys.isArray()){

		return _.map(keys, (key) => {

			var obj = {}
			obj[key] =  objectsMap[key]
			return obj;
		})

	} else {
		return null
	}
}

export const receivePropsFromParser = (objectsMap, keys, context = null) => {
	return true
}

export const objectsRecreateByDelimiters = (value, delimiters) => {
	return true
}

export const createTemporaryId = (objectsMap, keys, fn) => {
	return true
}

export const passField = (args) => {

}

export const mergeDatabaseTasks = (dbTasksCache, collection, tasks) => {
	var obj = {};
	obj[collection] = tasks;
	_.merge(dbTasksCache, {});
}

