

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
      parseDocument, parseFiles,
      parseDirectories,

  //
  // Validation and efficiency wrapper
  // … which can take in outputs of external third-party components
  //
  tyt,  // Microtime checkpoint and efficiency metrics configuration
  ty    // Parsing process outputs
        //(priority: './parsers/g-rhymes')

        // chainParsers // [???]     
}



import parse from './parser.processFlow'
import { queryTx } from './db.tokens'


import { initDB } from './db' // a light-weight database
import _ from 'lodash'        //(a wrapper for looping through arrays)
import { 
  parserModules, allowLocalFolders, 
  structExpressions_byLanguage,
  getDirectories, fileExists } from './fn.util'
// …
import shortid from 'shortid'
import Hashids from 'hashids'




//// Validation and/or efficiency measuring wrapper ///
// … functions with external/third-party solutions, too


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
            .encode(1, 2, 3),   // Hashids can encode a small amount of data
    subscribed: metricsSchema   // Could be omitted with use of sessions
  }
}
//    … function above wraps the parsing process below …
//     (or an external/third-party parsing process)


// ▼
// ▼  Mapping to schema (text2json ; tx2json)
// ▼  Parsing text (text2json) 
// ▼


//    … until it is unwrapped with the following function …
const ty = ( tyt, metricsData, outputs = null, validation = {

  // The following three are interchangeable (and also omittable)
  notarize: false,
  exportChecksums: false,
  exportHashes: false,
  // … instead of »false« add arguments to enable any, none or all of checksum algorithms:
  //  ["md5", "sha1", "sha256", "crc", …]


  // Validate outputs by schema — declared in one of the two following ways
  jsonSchema: null,   // …: 1) {"key.to.output.data": "http://path.to/schema.json"} 
                      //    2) "./schema.json" (when outputs array is validated with one schema)

  simpleSchema: null, // …: {"key.to.output.data": simpleSchema}

}) => {

  /*
  
  Operations:
  — calculate metrics
  — validate by schema
  — calculate checksums

  */

  return null
}



/////////////////////////////////////////////////////////////////////////


// Full-process parser object, exposing top-level and database functions
const text2json = (args, parsers = parserModules, storageType = "Memory", dbSource = null) => {

  var db = withTokenQueries( initDB(storageType) )

  initExpressions()

  return {
    init: initExpressions, // Match before parser runtime
    tyt: tyt, // Take your time (checkpoint when parsing begins)

    parseDoc: parseDocument,     // Main process
    parseFile: parseFile,     // ^ to context
    parseDirs: parseDirectories, // ^ to context

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
    // … tokenizing & mapping processes (2) are to be drafted here
    ty: ty,

    db: db // internal database, used by 
  }
}



//////////////////////////////////////////////////////////////////////


//
// Database queries, used by parsing, tokenizing and mapping processes
// … and brief descriptions of inputs to their function caalls
//


const withTokenQueries = (args, db) => {

  db._.mixin({ // Queries, which extend »lowdb« package


    // …
    queryTx: queryTx,


    // …
    recent: function(array, limit = 1, orderBy = ['id'], order = 'desc') {

      console.log(array)
      array = _.orderBy(array, orderBy, order)

      return (limit == 1) ? _.head(array) : _.slice(array, 0, limit)
    },


    // Ein Beispiel Schema (normaliziert ¿/+e/+s? )
    dbFlush: () => { // [!!!] Ein dataset steht hier zur Zeit
      db.set(
      'expr-cache': [ // Recurring elementary expressions
        {},
        {}
      ],
      'parsedData-as-session-keyId': {
        'context': {
          'keyId': { id: "Hola", storedData: "[???] Produce a good example" } // [!!!]
          'cashew': { 
            /*
              
            */
          }
        },
        'cache': {
          OrderedList: {
            treeDepth_eg_1: {
              lastIndex: 5
            }
          }
        },
        'tokens': [
          { id: "Beispiel", exprTrie: [] }
        ],
        'mapped': {
          '${collection/table}': {
            dbType: ["noSql", "SQL"], // [!!!]
          }
        }
      })
      .write()
    }
  })
  //
  // Optimization
  // — 

  return db
}



/////////////////////////////////////////////////////


const toContext = (db, pathArray, value = null, storeObj = null) => {


  if(value != null){

    storeObj = value
    value = null
  }


  if(pathArray){

    var res = {}
    res[ pathArray.last() ] = storeObj

    toContext(db, pathArray, value, res)

  } else {

    db.get('context').push(storeObj).write()
  }


  return db // [!!!] review in context of "one source of truth"
}


//
// Generates client-side and server-side parser Trie of expressions to match
// …  in a given document and it's surrounding context,
//    which may be used to recommend a specific parser to user
//
const initExpressions = (
  config = null,
  select = {
    parsers: null,    // [${parserName_1}, ${parserName_2}, …]
    categories: null, // [${categoryName1}, ${categoryName2}, …]
    languages: null,  // [${languageISO_code}, …]
    expressionTypes: null
    //               ^ [!!! ; to-define]
  },
  parsers = parserPackages) => {


  // Function to extract matching arguments with "select" terms
  const compare = (parserObj, select) => {

    parserObj['=='] = {}

    if(typeof parserObj.languages !== 'undefined' && typeof select.languages){
      parserObj['=='].languages = 
        _.intersection(parserObj.languages, select.languages)
    }
    if(typeof parserObj.categories !== 'undefined'){
      parserObj['=='].categories = 
        _.intersection(parserObj.categories, select.categories)
    }

    return categories
  }


  // Loop through parsers (with select) and generate expression trie
  parsers = _.map(parsers, (pckgName, parserObj) => {  // parsers.forEach()


    if (typeof select.parsers !== 'undefined' && !select.parsers.indexOf(pckgName))
      return null


    parserObj = compare(parserObj)
    if(!parserObj['=='].length)
      return null


    // … something about "config" object and declared variables here …


    exprHeader = {

    }


    return parserObj.initExpr = 
      structExpressions_byLanguage( invokeExpressions, exprHeader, config )
  })


  return parsers
  /*

  # Outputs parser object as …
  {
    ${packageName}: {
      initExpr: { … }  // « Expressions structured as trie object
    },
    …
  }

  */
}
// Search loops scenario in this function (efficiency being main concern)
// Better to use native JavaScript forEach function than lodash's _.map or _.merge, which are not aware of steps taken priorly
/*

Function "exposeParsables": loops through parserList array (count: ¹n)
  * ( = multiply by nested array items listed below)
        Loop through categories array (count: ²n), find match among both keys (steps: ²n * ¹n)
        Loop through parsers array (count: ³n)
        * Loop through each parser module name value in array (count: ⁴n) to find a match (steps: ³n * ¹n * ⁴n)

Test maths: {'¹n': 3, '²n': 4, '³n': 5, '⁴n': 6} ‹ [²n, ³n, ⁴n]: average counts of items in arrays
12 + 90 = 102 steps

*/
// [!!!] move this to another script?


const parseDocument = (args = {
  string: null,
  trie: null,
  db: null
}) => {

  // The following functions are run …
  /*
    — tokenize
    — map

    … anything else?

  */

  return null
}


const parseFiles = (db, args = {
  context: null,
  files: null, 
  trie: null
}) => {


  var results = []

  return (typeof args.files !== 'array') ? null :
    _.map(args.files, (pathTo_file_or_directory) => {
    
    if( fileExists( pathTo_file_or_directory )){

      results = _.merge(results, parseDocument(db, {
        string: fs.readFile(pathTo_file_or_directory, 'utf8', readData),
        trie: args.trie
      }) )
    }
  })
}


const parseDirectories = (db, args = {
  context: null,
  dirs: null, 
  trie: null
}) => {


  var results = {}

  dirs.forEach((dir) => {
    
    results = _.merge( 
                results, 
                parseFiles(db, {
                  context: args.context, 
                  files: files, // [!!!] get list of files
                  trie: trie
                }) )
  })


  return results
}
 

// A thing or two about UTF-8 characters: informit.com/articles/article.aspx?p=30893&seqNum=9