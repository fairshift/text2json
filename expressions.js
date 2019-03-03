

//
// Functional characters / phrases to import into "matchExpressions", "buildTrie_from[Aa-Zz]+"
// … an extensible set
//
const Expressions_std = {
  regexpSubset: {
    "\r\n": "\s",
    "\n": "\s",
    "\s": [false, withSuffix],
    _minBufferLength: null
  },
  __suffixList: ["*", "+"],
}
const noSuffix = 0, const withSuffix = 1