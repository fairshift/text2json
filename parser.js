
import _ from 'lodash'
import md from 'markdown-it'


const parseCollection_steps = 
[
	'createArrayOfObjects',
		'createArrayOfObjects': [
			'receiveObjectsFromParser', 'objectsRecreateByDelimiters', 
			'receivePropsFromParser', 'addToContext'
		],
		'*',
		'*__temporary',
		'js',
	'databaseTasks'
];

const parser = (parserName, args) => {

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
// Persistent data sets should be informing functions: 
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



export default parser