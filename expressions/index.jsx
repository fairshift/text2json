

export {

	// Reserved set of symbols (package-wide)
	//(replacements and suffixes supported)
	runtime_stdExpressions,

	// Filesystem-specific types are here applied to 
	SOF,
	EOF,
	Line,
	
	Headline,
	Paragraph
}




//
// Functional characters / phrases to import into "matchExpressions", "buildTrie_from[Aa-Zz]+"
// … an extensible set
//
const runtime_stdExpressions = {
  regexpSubset: {
  	// Sequence of replacing
    "\r\n": "\s",
    "\n": "\s",
    "\s": [self, withSuffix],
    __minBufferLength: null
  },
  __suffixList: ["*", "+"],
}
const self = "__NO_REPLACE"
const noSuffix = "__NO_SUFFIX"
const withSuffix = "__WITH_SUFFIX"