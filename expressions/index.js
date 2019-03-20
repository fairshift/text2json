

export {

	// Filesystem-specific types are here applied to 
	SOF,
	EOF,
	
  // List of block expressions (which contain sequences of text)
	Line, 				// See: Degs - Mixtape Sprayout @ 2 minutes 11 seconds
	Headline,
	Paragraph,
  Brackets,
  BulletPoint,
  Colon, 
  SemiColon,
  Comment,

  //
  DictionaryMatch,

  // Standard codifications
  monthsCaseInsensitive,
  dashSymbols,
  bulletPoints,

	// Reserved set of symbols (package-wide …
	// … ; with replacements and suffixes)
	runtime_stdExpressions,
	self, noSuffix, withSuffix, __synonymPrevails
}



// Expressions to export from this script
import Paragraph from './paragraph'
import Brackets from './brackets'
import BulletPoint from './bulletpoint'
import Colon from './colon'
import SemiColon from './semicolon'
import Comment from './comment'
import DictionaryMatch from './dictionary'
import DateTime from './datetime'
import Line from './line'



/*

  Standard type definitions

*/


const monthsCaseInsensitive = {
  latin: [ 0, 'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'a+g', 'sep', 'o+t', 'nov', 'de+' ],
  cyrilic: [ ]
}

const dashSymbols = {
  std: '-', en: '-', em: '—'
}

const bulletPoints = (extend = {}, extendDash = dashSymbols) => {

	var result = {
  	middleDot: "·"
  }

  return _.merge(result, extendDash, extend)
}



//
// Functional characters / phrases to import into 
// "matchExpressions", "buildTrie_from[Aa-Zz]+"
// … 	an extensible set of expressions, used to convert
//		diverging expressions with same purpose (or meaning)
//		to a reduced uniform list of expressions before tokenizing
//
const runtime_stdExpressions = {
  regexpSubset: {

  	// Sequence of replacing variations of expressions
  	// with a general pattern

    "\r\n": "\s",
    "\n": "\s",
    "\s": [self, withSuffix],

    __minBufferLength: 5
  },
  __suffixList: ["*", "+"]
}
const self = "__NO_REPLACE"
const noSuffix = "__NO_SUFFIX"
const withSuffix = "__WITH_SUFFIX"


// Side of the variable (name or value),
// which is matched, and which is replaced
// …	for practical reasons (= how objects are traversed),
// 		the preceding left-side value (= variable name) is matched 
// 		and right-side (variable value) is replacing matched value

	const __synonymPrevails = "__SYNONYM_RIGHT"
//	const __synonymPrevails: "__SYNONYM_LEFT"