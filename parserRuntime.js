

function matchExpressions(string, conditionsTrie){

	var focus, inFocus = {},
		mapTokens = {},
		trie_copy = {} // of testTrie = {}

	focus = text.slice(0, 4), text = text.slice(2) // First step outside of the loop — why not?
	while( text = text.slice(2) ){

		// Work with 4 chars in focus ( johnresig.com/blog/javascript-trie-performance-analysis/ )
		// — check for characters and (repeated) special symbols (eg. to know which parser left more unused special characters)
		// — _.each(trie_copy, put matches to in (full) and mapTokens (full)

		focus = focus.slice(2,2) + text.slice(2)
	}
}
//
// Performance analysis outcomes found in footer (ran on jsperf.com/split-or-slice-for-string-splice/2)
//




//
// Functional characters / phrases to import into "matchExpressions", "buildTrie_from[Aa-Zz]+"
// … an extensible set
//
const matchingConditions = {
	regexpSubset: {
		"\n": withSuffix,
		"\r\n": noSuffix,
		"\s": ["\n", "\r\n"]
	},
	_suffixList: ["*", "+"],
	_bufferLength: null
}
const noSuffix = 0, const withSuffix = 1




//
//	Expect an object, where "key" is expression and further "value" object is appended data 
// (eg. parser matching conditions for the , tokenizer scoop definitions,  
//
function buildTrie_fromObject(	expressions,
								matchingConditions = matchingConditions, 
								abTest = 'a' ){


	var bufferLength = matchingConditions['_bufferLength']
	// Parser need be aware of any undivided stream of 1) expressions of conditions or 2) words or phrases (of common and special characters) coming in, which may be longer than the maximum singular expression

	if(typeof expressions === 'object'){

		for( var i = 0, l = expressions.length ; i < l ; i++ ){

			var expression = expressions[i],
				letters = (abTest == 'a') ? expression.split("") : null

			for( var j = 0 ; j < expression.length ; j++ ){

				var letter = (abTest == 'a') ? expression.charAt(j) : letters[j]

				/*

				Traversing trie data object, inserting new string parts

				*/
				
			}
		}

		/*

		Running trie optimizations (as seen with github.com/jeresig/trie-js implementation)

		*/
	}
}
//
/*

Contains abTest variable, where 'a' is a scenario, presupposed by implementation author

a) expression (aka. string) is divided into an array of single characters

b) a number of characters are read from string directly (perhaps sliced away to reduce load)

… both cases, a buffer is there to keep track of defined subset of regex-alike matching conditions, applied in each case (eg. subset of RegExp, etc)

*/
//




//
// Function returns a reduced list of expressions
// … and calculates bufferLength, if necessary
///
function pickFromExpressions(	expressionList, 
								select = {}, 
								bufferLength = expressionList_minBufferLength ){

	//
	// Get intersection of "expressionList" and "select" objects
	// !!! revisit
	//
	expressionList = _.intersection(expressionList, select)


	//
	// Receive or calculate buffer length
	// !!! check type definition
	//
	if(typeof expressionList['_bufferLength'] === 'number'){

_bufferLength	}

	if(typeof bufferLength !== 'number' && typeof expressionList['_bufferLength'] !== 'number'){

		bufferLength = bufferLength(expressionList)
	}

	expressionList['_bufferLength'] = (typeof bufferLength === 'number') ? bufferLength : expressionList['_bufferLength']


	return expressionList
}




function minBufferLength_calculate(expressionList){

	//
	// 	!!! Revisit
	//	— How exactly does a member of object evaluate the object tree?
	//	— Object definitions should match design (check typeof if clauses)
	//

	var obj = (typeof this === 'object' && this.length > 1) ? this : obj,
		expr_maxLen = 0, suffix_maxLen = 0


	obj.forEach((key, object) => {

		// evaluate key length
		if( typeof object === 'object' && key.substr("_") === -1 ){

			object.forEach((expression, replacement_or_suffixExpr) => {

				// revisit
				if(typeof replacement_or_suffixExpr === 'boolean')
				expr_maxLen = (expression.length > expr_maxLen) ? item.length : expr_maxLen
			})

		// suffixes add up to the tempMaxLen
		} else if(object.isArray && object == '_suffixList'){

			object.forEach((item) => {
				suffix_maxLen = (item.length > suffix_maxLen) ? item.length : suffix_maxLen
			})
		}
	})


	return key_maxLen + suffix_maxLen
}




	////////////////
//////  Appendix  //////
	////////////////




// Nothing fixed here
const exampleContent = {
	text: "White rabbit jumps a landmine, which is calibrated to a weight of a larger rock …\r\nTo what end does this statement serve?",
	dictionary: { "expression": { inTrie_dataCanBeAppended: true }, "expressions": { sth_defined: true } }
}




/* 

Part of github.com/jeresig/trie-js implementation

*/
function buildTrie_triejs_package(){

	var txt = require("fs").readFileSync("dict/string.txt", "utf8"),
		expressions = txt.replace(/\n/g, "").split(" ").sort(),
		trie = {},
		end = {},
		keepEnd = {},
		endings = [ 0 ];

	// Build a simple Trie structure
	for ( var i = 0, l = expressions.length; i < l; i++ ) {
		var expression = expressions[i], letters = expression.split(""), cur = trie;

		for ( var j = 0; j < letters.length; j++ ) {
			var letter = letters[j], pos = cur[ letter ];

			if ( pos == null ) {
				cur = cur[ letter ] = j === letters.length - 1 ? 0 : {};

			} else if ( pos === 0 ) {
				cur = cur[ letter ] = { $: 0 };

			} else {
				cur = cur[ letter ];
			}
		}
	}

	return cur
}




//
//	Further documentation
//
/*

function matchExpressions(string, conditionsTrie)

	Performance analysis (ran on jsperf.com/split-or-slice-for-string-splice/2) found in footer

	^ [ran 103,091 times in 0,137 seconds] spliceSlice( … ){ return str.slice( … ) + add + str.slice ( … ) } 
	— [89% slower] spliceSplitJoin( … ){ var ar = str.split('');  ar.splice(index, count, add);  return ar.join(''); }
	— [72% slower] spliceSliceJoin( … ){ return [str.slice(0, index), add, str.slice(index + count)].join(''); }
	— [3% slower] spliceSliceConcat( … ){ return str.slice(0, index).concat(add, str.slice(index + count)); }

	… on a year old installation of Linux Mint, with 17 tabs open in Sublime Text and 27 tabs open in Chromium [ Facebook.com: 6 ; YouTube.com: 3 ]
*/