// # The more detailed code disposition ( > index.js ),
//	 feeding compiled expressions Trie to parserRuntime.js


import _ from 'lodash'
import md from 'markdown-it'


export default parseText
export {
	
	// Parsing process: for parseText and mapTokensToSchema
	parseText,
	mapTokensToSchema,

	// From previous disposition of code …
	/*

	createArrayOfObjects,
		receiveObjectsFromParser, receivePropsFromParser, objectsRecreateByDelimiters,
	createTemporaryId,
	passField,
	mergeDatabaseTasks

	*/
}




const parsingFlow_steps = {

	// When to include user or admin input to resolve ambiguities? After …
	// — parseText function: tokens are more native to content itself (enabling representation/overlay)
	// — mapTokensToSchena function: validation is an important part of structuring data

	parseText: [

		'mapExpressions',	// expressions from all parsers in one array
											//(with references to parser components)
		'receiveContext',	// receive context from application container

		// Parse one string/object or loop through files/documents in filesystem
		'documents.forEach',					// custom parser document.js script
			'tokenize(path/filename)',	// custom parser filesystem.js script
				'toContext',							// add tokens to context (= mapping some tokens to a more accessible object)
			'tokenize(document)'				// run through string and expressions
																	// … using context when so defined

		// Returns: list of tokens with references ( relative to other tokens ; position in originating content )

	],

	// Mapping flow — run to reduce schema-validated scenarios, then run again with user or admin input
	mapTokensToSchema: [,		// token to JSON schema

		'loadSchemas',				// for each parser, which created tokens … (provided in three ways, in this sequence):
													// — url, collectionOrTable
													// — schema.${collectionOrTable}.json in parser directory
													// — in schema.json file: top-most property is ${collectionOrTable}
		// Saves all related schemas in a temporary folder, for JSON references functionality

		'findTokens',					// find tokens in array of objects for each schema
		'tokensToSchema',			// loop through matching tokens for each schema
			'transform',				// transform functions
			'map',							// to schema
			'validate',					// which scenarios match schema

		// Returns: validated datasets, structured according to a schema (either in SQL or NoSQL shape)
		//				 (object could optionally return results which didn't pass validation against JSON schema)
	],

	// Tokenize flow (wrapper function) — match sequence of conditions, return an array of potential matches
	tokenize: [
		/*
			'matchExpressions',	// loop …
				'nextMatch',			// find 1st following match for any potential expressions (1st conditions first …)
													// remove expressions without a match
													// create array of potentially matching expressions
													// sort array by occurence
													// repeat
				'scoop',					// push content to tokens (with optional nearby content)
			'createTokens',			// create tokens where there's no ambiguities
			'createScenarios',	// create various scenarious where there's multiple possibilities 
													//(to resolve by user / admin input)

			'parserSignatures',	// append signatures of active parsers
													//(??? think through validation)mapping wrapper function
		*/

		// Returns: singular streams of tokens and unresolved possible scenarios
	]
};


// Maybe a replacement for the following function
const assembleParserTrie = (parserList) => {

	return null
}


// [!!!]
const parseText = (args = {
	db: null,
	config: null
}) => {


	// var reserved = ['parserConfig', 'createContext', 'createObjects'];


	// Check if input was supplied: caption, text, …	(!!! diff ???)
	if(typeof args.text === 'undefined' || !args.text){
		return null
	}


	//
	// Redefine this part to align with:
	// — Parser Trie programmatic expressions structure
	//
	//
  try {

  	if(	typeof args.parserName !== 'undefined' &&
  			typeof args.parserMappings !== 'undefined' ){

	    var schema = require('./'+parserName)(parserMappings),
	   			context

	   	context.ext = _.map(schema.receiveContext, function(key, value){

	   		if(typeof args[key] !== 'undefined'){

	   			var obj = {}
	   			obj[key] = value;
	   			return obj
	   		}

	   	});
		}


		//
		// This process can be understood in context of document flow
		//(decomposed to defined units of expression — eg. paragraphs)
		//
		// Persistent data sets should be informing receivePropsFromParser functions: 
		// - mapObjects (collections & objects to parse)
		// - jsonDataObject (dataset to return)
		// - databaseTasks (list of tasks to perform in wider application container, outside of text2json package)
		//


  } catch(ex){
  	return null
  }
}


const mapTokensToSchema = (schemaMap, db, config)  => {

	_.each(schemaMap, (schema) => {

		// Expecting …
		/*
			schema.jsonSchema_url || schema.parserName
			schema.
		*/
	})
}