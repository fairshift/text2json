

// !!!
// Self-referencing JSON in values? (npmjs.com: hookney ; jsonplus ; json-expand)
// jsonplus: '{{ key1 }} {{ key2 }}' ; 'firstKey.secondKey[thirdKey].fourthKey' ; '@self.key'
// json-expand: '{{ key }}' ; '{{ firstKey.secondKey }}'
// hookney: '${self:firstKey.secondKey}'


import hashids from 'hashids'

import { path, join } from 'path'
const { readdir, stat } = require('fs').promises



export {
  parserList, initPhrases_byCategory,
  config, allowLocalFolders, 
  generateId_hashids,
  getNumberType,
  getBeforeFirstComma,
  asterixStringToRegex,
  removeMarginalOccurence,
  getDirs, getDirectories, fileExists };
  


// Initialization

const parserList = fs.readFileSync("parsers.json");
const config = fs.readFileSync("config.json");

const allowLocalFolders = () => {
  return config.localDatasetsIn;
}



/*

  Parser.js initiation utility functions

— Auxilliary functions to read predefined files on server below)

*/

function initPhrases_byCategory(category, parsers = null){

  var invokePhrases_perParser = [];
  var parsers = (_.isArray(parsers)) ? parsers : parserList[category];

  forEach(parsers, (parserName) => {
    invokePhrases_perParser[ category ].push( fetchPhrases(parserName) );
  })
}

function fetchPhrases(moduleName){

  try {
    return require('./'+moduleName)(invoke)

  } catch (ex) {
    return null;
  }
}


const generateId_hashids = (string, salt = [1,2,3]) => {
  var hashids = new Hashids(string);
  return hashids.encode(salt);
}


function getNumberType(n){
  if( Number(n) === n ){

    return (n % 1 === 0) ? 'int' : 'float';
  } else {
    return false;
  }
}

const getBeforeFirstComma = (string) => {
  let arr = string.split(',');
  return arr[0];
}



const asterixStringToRegex = (string, replaceWith) => {

  string = string.replace(string, replaceWith);
  return "/.*(" + ").*/gm"
}



const removeMarginalOccurence = (input, pattern, args = {first: true, last: true}) => {

  if( args.first == true && input.firstIndexOf(pattern) == (input.length - pattern.length) ){

    input = input.substr(0, input.length - pattern.length)
  }

  if( args.last == true && input.lastIndexOf(pattern) == (input.length - pattern.length) ){

    input = input.substr(0, input.length - pattern.length)
  }

  return input;
}



/*

  Local filebase functions

*/

// Async getDirs function
const getDirs = function(rootDir, cb) { 
  fs.readdir(rootDir, function(err, files) { 
      var dirs = []; 
      for (var index = 0; index < files.length; ++index) { 
        var file = files[index]; 
        if (file[0] !== '.') { 
          var filePath = rootDir + '/' + file; 
          fs.stat(filePath, function(err, stat) {
            if (stat.isDirectory()) { 
              dirs.push(this.file); 
            } 
            if (files.length === (this.index + 1)) { 
              return cb(dirs); 
            } 
          }.bind({index: index, file: file})); 
        }
    }
  });
}

// Async getDirectories function
const getDirectories = async path => {
  let dirs = []
  for (const file of await readdir(path)) {
    if ((await stat(join(path, file))).isDirectory()) {
      dirs = [...dirs, file]
    }
  }
  return dirs
}

const fileExists = (path) => {
  return fs.existsSync(path)
}



// A pile of ... additional code examples (to tidy up and tie into flow, if necessary)
/*

// 1: Get list of directories
path.resolve(__dirname, file)

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

// 2: Read file
fs.readFile('JournalDEV.txt', 'utf8', readData);



// 3 & 4: Search objects in array by keys
// From:  stackoverflow.com/questions/35137774/extract-deeply-nested-child-objects-by-property-name-with-lodash

// 3: Plural, efficient (thus modified for searching multiple objects)
export function find_objects_by_name(obj, keys) {
  if( !(obj instanceof Array) ) return [];

  var res = [];
  forEach(keys, function(key){
    if (key in obj)
      res.push.apply(res, key)
  });
  if( res.length ){
    return res;
  }

  forEach(obj, function(v) {
    if ( typeof v == "object" && (v = find_obj_by_name(v, keys)).length )
      res.push.apply(res, v); // _.merge() might be correct in plural form?
  });
  return res;
}

// 4: Elegant (code-wise)
export function find_object_by_name(obj, key) {
    if( !(obj instanceof Array) ) return [];

    if (key in obj)
        return [obj[key]];

    return _.flatten(_.map(obj, function(v) {
        return typeof v == "object" ? find_obj_by_name(v, key) : [];
    }), true);

}*/