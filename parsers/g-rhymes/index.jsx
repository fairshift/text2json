

import lowdb from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

import _ from 'lodash'



// Parsing process …
export {
  // Local files to process
  getDirectories,
  readFile,

  initDB, // Initiate database

  // Social media data connectors
  parseFbData, 

  // Core parser logic works through a given text …
  LiederHolen,        // stripping word by word free of surrounding symbols,
                      // returning a histogram of words
                      //(with a tiny context included — +2 surrounding words)
                      // and inserting words found anew
  RaiseRhymeCluster   // and also allows for inserting of rhymes
                      // after one consciously analyzes them
}




// Async file read/write adapters (used by lowdb package)
import fs from 'graceful-fs'
import pify from 'pify'   // read
import steno from 'steno' // write


//
// Initialization
/*
const parserModules = readFile("parsers.json");
const config = readFile("config.json");
*/
const initDB = () => {

  var db = lowdb( new FileAsync() )

  db._.mixin({
    pair: (array, wort) => {
      _.filter(array, {sequence: wort})
    },
    checkRhymes: (array, wort) => {   // Da gibt worter wie sind 
      _.filter(array, {rhymesWith: wort})
    }
  })

  return db
}




/*


Parsing Facebook archive to find rhymes (which means reverse order Trie data structure)


*/
//
// Experimental partial function 
//(missing out on posts and comments on own and friends'/pages' walls alike)
//
export const parseFbData = (folder, trieObj) => {


  // » Output »
  let outputTrie = {}

  // » Input setup »
  let mediaFolders = new Array( "messages", "photos_and_videos" )


  _.forEach( mediaFolders, (contentType) => {

  	//
  	// Input source in processing
    //(now designing with two datasets from facebook-blablaz.zip and facebook.com-santappl.zip)
  	//
  	switch (contentType) {

  		case "messages":

        // Loop through directory tree

        _.each(getDirectories(folder), (path) => {


    			if( messages = readFile(message.json) ){

            _.each(messages[contentType], (message) => {


              /*

                  {
                    "sender_name": "La\u00c5\u00be Euermann",
                    "timestamp_ms": 1361960968329,
                    "content": "pa da vidmo :)",
                    "type": "Generic"
                  }, …

              */


              // <!--
              /*
              var undividedStrings = message.content.split(" ");
              var appendData = message


              _.each(undividedStrings, ( string ) => {

                addToTrie( string, trieObj, appendData ); // [!!!] revisit according to function inputs
              })
              // -->

              */

            })
          }

        };
  			break;

  		case "photos_and_videos":

  			// Map images
  			// … expect a user-generated meta.json file
  			readFile("parsers.json");
  			break;

      default:
        break;

  	}
  })

  return results
}


export const LiederHolen = (documents, meta, db) => {

  var resultingDataset = []
  documents.forEach((document) => {

    var WortschatzMöglichkeiten = [],
        wort, previousSpace = 0

    while ((WortschatzMöglichkeiten = RegExp(/\s/g).exec(document)) !== null) {

      wort = document.substr(previousSpace, WortschatzMöglichkeiten.lastIndex)
      previousSpace = WortschatzMöglichkeiten.lastIndex

      WortschatzMöglichkeiten.forEach((wort) => {

        var results = {}
        var RegexMap = {
          l: {
            parentheses:  RegExp(/^\((.*) */gm),
            brackets:     RegExp(/^\[(.*) *$/gm),
            lowdash:      RegExp(/^\_(.*) *$/gm),
            dash:         RegExp(/^\-(.*) *$/gm),
            dot:          RegExp(/^(.*)\. *$/gm)
          },
          r: {
            dot:          RegExp(/^(.*)\. *$/gm),
            comma:        RegExp(/^(.*)\, *$/gm),
            parentheses:  RegExp(/^(.*)\) *$/gm),
            semicolon:    RegExp(/^(.*)\; *$/gm),
            colon:        RegExp(/^(.*)\: *$/gm),
            brackets:     RegExp(/^(.*)\] *$/gm),
            lowdash:      RegExp(/^(.*)\_ *$/gm),
            dash:         RegExp(/^(.*)\- *$/gm)
          }
        }

        var gefunden = {}
        RegexMap.forEach((side, map) => {

          pattern.forEach((key, pattern) => {

            var currentLength = wort.length
            var result = pattern.exec(wort)

            if(result.length != wort.length){
              
            }
          })
        })
      })
    }
  })
}


const RaiseRhymeCluster = (input, inputType, src, db) => {

  
  return result
}




// Filesystem
const fn_readFile = pify(fs.readFile);
const fn_writeFile = pify(steno.writeFile);

// Async readFile function taken from lowdb package
const function readFile(source) {

  // fs.exists is deprecated but not fs.existsSync
  if (fs.existsSync(source)) {
    // Read file
    return fn_readFile(source, 'utf-8').then(function (data) {
      return data
    }).catch(function (e) {
      e.message = `Err (readFile): ${e.message}`;
      throw e;
    });
  } else {
    return null
    /* Initialize file …
    return writeFile(this.source, this.serialize(this.defaultValue)).then(function () {
      return _this2.defaultValue;
    });*/
  }
}

const getDirectories = async path => {
  let dirs = []
  for (const file of await readdir(path)) {
    if ((await stat(join(path, file))).isDirectory()) {
      dirs = [...dirs, file]
    }
  }
  return dirs
}
