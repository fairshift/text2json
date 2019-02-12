
export default parser
export {
  parser,                             // main parser wrapping function
  initExpressions,                    // a subset of expressions to parse client-side
  parseText, parseFile, parseFolder   // lower level functions
}



import parse from './parsingFlow'
import { 
  parserModules, getExpressions_parserInit, allowLocalFolders,
  fileExists, getDirs, getDirectories,
  replaceKeys } from './util'

import _ from 'lodash'
import lowdb from 'lowdb' // simplistic database (lodash enabled)




// Objects, derived from parsing process, further on passing through mapping functions
/*const defaultState = {
  object: null,       // one specific object, supplied by parser() function, which loops through objectsMap
  objectsMap: null,   // objects   objectsMap: null,   // objects to map to schema
to map to schema
  context: null,      // contexts available in string.js: application context (index.js), filesystem(.js)
  config: null        // parser configuration
}*/
// const parserArgs_schema = { caption: '', text: '', diff = '' }



// Parser object, exposing database and top-level functions
const parser = (args, dbAdapter = "Memory", dbSource = null, parsers = parserModules) => {

  // lowdb initialization
  switch (dbAdapter) {

    case "Memory":
      var Memory = require('lowdb/adapters/Memory')
      dbAdapter = new Memory()
      break

    case "LocalStorage": // Browser
      var LocalStorage = require('lowdb/adapters/LocalStorage')
      dbAdapter = new LocalStorage(dbSource)
      break

    case "FileAsync": // Server-side
      var FileAsync = require('lowdb/adapters/FileAsync')
      dbAdapter = new FileAsync(dbSource)
      break
  
    default:
      break
  }

  db = lowdb( dbAdapter )
  db.defaults({ tokens: [], context: {} }).write()

  initExpressions()

  return {
    init: initExpressions,
    db: db,
    dbFlush: () => {
      db.set('tokens': [], 'context': {})
        .write()
    },
    parseText: parseText,
    parseFile: parseFile,
    parseFolder: parseFolder
  }
}


const initExpressions = (args = {}, parserModules = parserModules, config = ) => {
  
  // Set arguments
  defaultArgs = {
    select: {
      categories: null,
      parsers: null,
      languages: null
    },
    config: null
  }

  args = _.merge(defaultArgs, args)


  // Set function variables
  var parsers = {},           // active parser modules
      expressionHeader = {},  // process
      result = []             // output
  

  switch (parse)

  forEach(parsers, (parserName) => {

     expressionHeader = {
        parser: parser,
        category: category
      };

    expr = _.map( getExpressions_parserInit(parserName), (key, object) => {

      switch (key) {

        case ( // Config params
          'nearby' // , …
        ):

          if(!parserConfig[parserName]){
            parserConfig[parserName].push({ key: expressions })
          }
          return

        default: // Language key or expression

          // Language key (ISO) or * (global)
          if(  ){

            if(typeof args.select.languages !== 'undefined'){

              invokeExpressions = structExpressions_byLanguage( invokeExpressions,  )

            } else {

              invokeExpressions = structExpressions_byLanguage( invokeExpressions, key, object, exprHeader )
            }

          // Catch invalid parameters
          } else { return null }

          return null
      }
    })
  })

  return null
}

// Get a list of parsers (and possibly load them):
/*
  — all available parsers
  — by either of, or intersection of: args.select.categories x args.select.parsers
const getParsers = (args = {}, ) => {

  var parsersBy = (_.isArray(args.select.categories)) ? { 
        categories: _.filter(parserModules, args.select.categories)
      } : null

  var parsersByName = (_.isArray(args.select.parsers)) ? {
    _.filter(parserModules, args.select.parsers) : null
  }
}

const exposeParsables = (args = {}) => {

// Input params
/*
 — args: {
    categories: ['categoryName1', 'categoryName2', ...],
    parsers: {
      'categoryName1': ['parserName1', 'parserName2', ...]
    }
   }
*/
/*
  var invokingExpressions = {}; // … which may be used to recommend a specific parser to user

  // Loop and return categories and parsers 
  forEach(parserList, function(parserList_category){

    // Specified category
    var thisCategoryIsIn = false;
    if( typeof args.categories !== 'undefined' ){
      if( parserList_category in args.categories ){

        _.merge(invokingExpressions[ parserList_category ].push( initExpressions_byCategory(parserList_category) );
        thisCategoryIsIn = true;
      }
    }

    // Specified parsers
    if( thisCategoryIsIn == false && typeof args.parsers !== 'undefined' ){

      var match = _.intersection(parserList_category, args.parsers[parserList_category]);
      if( !_.isEmpty(match) == true ){

        invokingExpressions[ parserList_category ].push( initExpressions_byCategory(parserList_category, match) );
      }
    }

    if( typeof args.categories === 'undefined' && typeof args.parsers === 'undefined' ){

      forEach(parserList_category, function(categoryName, parsers){
        invokingExpressions[ parserList_category ].push( initExpressions_byCategory(parserList_category) );
      });
    }
  }

  return invokingExpressions;

  /*

    Output object:
    
    keyword
  */
  
// Search loops scenario in this function (efficiency being main concern)
// Better to use native JavaScript forEach function than lodash's _.map or _.merge, which are not aware of steps taken priorly
/*

Function "exposeParsables": loops through parserList array (count: ¹n)
  * ( = multiply by nested array items listed below)
        Loop through categories array (count: ²n), find match among both keys (steps: ²n * ¹n)
        Loop through parsers array (count: ³n)
        * Loop through each parser module name value in array (count: ⁴n) to find a match (steps: ³n * ¹n * ⁴n)

Test maths: {'¹n': 3, '²n': 4, '³n': 5, '⁴n': 6} ‹ [²n, ³n, ⁴n]: average counts of items in arrays
12 + 90 = 102 steps                                                                                                              */




const parseText = (categoryName, parserName, args = parserArgs_schema) => {

  if( typeof parserList[ categoryName ] !== 'undefined' ){
    if( typeof parserList[ categorName ][ parserName ] !== 'undefined' )
      return parser( categoryName, parserName, args );
  }

  return false
}

const parseFile = (parserName, pathToFile) => {

  /*
  if(fileExists(pathToFile)){
    fs.readFile(pathToFile, 'utf8', readData);
  }

  return jsonObjects
  */

  return true
}

const parseFolder = (parserName, pathToFolder) => {

  /*
  if(typeof args.pathToFolder !== 'undefined'){
    args...
  }

  return jsonObjects
  */

  return true
}


// A thing or two about UTF-8 characters: informit.com/articles/article.aspx?p=30893&seqNum=9