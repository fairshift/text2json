

export {

	// Reserved set of symbols (package-wide …
	// … ; with replacements and suffixes)
	runtime_stdExpressions,

	// Filesystem-specific types are here applied to 
	SOF,
	EOF,
	Line,
	
	Headline,
	Paragraph
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
const withSuffix = "__WITH_SUFFIX",


// Side of the variable (name or value),
// which is matched, and which is replaced
// …	for practical reasons (= how objects are traversed),
// 		the preceding left-side value (= variable name) is matched 
// 		and right-side (variable value) is replacing matched value

	const __synonymPrevails: "__SYNONYM_RIGHT",
//	const __synonymPrevails: "__SYNONYM_LEFT"