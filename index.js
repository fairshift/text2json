

//
// Parsers usually function in multiple phases:

// — a parser tree is compiled somewhere in the process
//   to facilitate efficient pattern matching
// — a sequence of inputs is analyzed for matching expressions,
//   where some inputs are extracted and possibly transformed
//   and then translated to a list of tokens
//  (= standardized data nodes of different types)
// — tokens are rendered to another data structure type (eg. HTML or JSON)


export default text2json  // Package is not functionable 
                          //(with one parser using the partial tx2json function)

export {
  // Use for client-side efficiency gains
  initExpressions,  // Parser-invoking expressions 
                    // to match in-browser or in-app

    // Main process containers
    text2json,  // Parsing from a given format to validated JSON-encoded data
    tx2json,    // Transforms tokens to a NoSql/SQL compatible schema

      // Lower level functions, which are chained by the above
      parseText, parseFile,
      parseFolder, 
      chainParsers            // Use to chain several parser packages
                              //(priority: './parsers/g-rhimes')

  //
  // Validation and efficiency wrapper
  // … which can take in outputs of external third-party components
  //
  tyt,  // Microtime checkpoint and efficiency metrics configuration
  ty,   // Parsing process outputs 
}



import parse from './parsingFlow'
import { queryTx } from '-/db.tokens' /


import { initDB } from './db' // a light-weight database
import _ from 'lodash'        //(a wrapper for looping through arrays)
import { parserModules, allowLocalFolders } from './util'
// …
import shortid from 'shortid'
import hashids from 'hashids'






///////////////// Validation and/or efficiency measuring wrapper
//                … functions with external/third-party solutions, too


// Stores
const ty = ( tyt, metricsData, schemaValidation = null)

// ^
// ^ Mapping to schema (text2json ; tx2json)
// ^ Parsing text (text2json) 
// ^

// Take your time (run this at start of your input parsing process)
const tyt = ( microtime = '(stackoverflow.com/questions/11725691/how-to-get-a-microtime-in-node-js)',
              metricsSchema = {
                /*

                Efficiency metrics based on reported categories:
                — number of characters parsed
                — rows and loops

                … In development:
                — does storing object/array key names make sense
                  for inputs from third-party parsers?

                */
              }) => {

  /*

    … Some database operations (= session, itd) …

  */

  return {
    id: new Hashids(shortid.generate)
            .encode(1, 2, 3), // Hashids can encode a small amount of data
    subscribed: metricsSchema // Could be omitted with use of sessions
  }
}

//
/////////////////




// Full-process parser object, exposing top-level and database functions
const text2json = (args, parsers = parserModules, storageType = "Memory", dbSource = null) => {

  var db = withTokenQueries( initDB(storageType) )

  initExpressions()
    parseText: parseText,     // Main process
    parseFile: parseFile,     // ^ to context
    parseFolder: parseFolder, // ^ to context

    ty: ty,

    db: db

  return {
    init: initExpressions, // Match before parser runtime
    tyt: tyt, // Take your time (checkpoint when parsing begins)

    parseText: parseText,     // Main process
    parseFile: parseFile,     // ^ to context
    parseFolder: parseFolder, // ^ to context

    ty: ty,   // Schema validation and efficiency measurements

    db: db    // Database wrapper object
  }
}


//
// Now working on »tx2json« function, enabling some of the following:
// — maps tokens to a declared schema (json-schema ; NoSQL or SQL compatible)
// — validates data with declared schema
// … delivers results with a possible list of operations yet to be concluded
//  (user input ; backend)
//
const tx2json = (tokenList, storageType = "Memory") => {

  var db = withTokenQueries( 
    initDB(storageType, {

      tokens: tokenList

    }) 
  )

  // parserExecutables.forEach((parserName, obj) => { obj.fn: null })
  return {
    tyt: tyt,
    // … a mapping process is to be drafted here
    ty: ty,

    db: db
  }
}


//
// Database queries, used by parsing, tokenizing and mapping processes
// … and brief descriptions of inputs to their function calls
//

const withTokenQueries = (db) => {

  db._.mixin({ // Queries, which extend »lowdb« package


    // …
    queryTx: queryTx(tokens, args),


    // …
    recent: function(array, limit = 1, orderBy = ['id'], order = 'desc') {

      console.log(array)
      array = _.orderBy(array, orderBy, order)

      return (limit == 1) ? _.head(array) : _.slice(array, 0, limit)
    },


    // …
    dbFlush: () => { // [!!!] Ein dataset steht hier zur Zeit
      db.set(
        'context': {
          'keyId': { id: "Hola", tokens: [] }
        },
        'documents': [
          { id: "Beispiel", tokens: [] }
        ],
        'jsonMap': {
          'collection/table': {
            dbType: ["noSql", "SQL"], // [!!!]
            
          }
      })
      .write()
    }


  })

  return db
}


//
// Client-side parser Trie of expressions to match
// … in a given document and it's surrounding context
//
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