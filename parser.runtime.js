

// [InDevelopment]
//
// Process compass: code from examples — found in a flow

// — (parser.ReactWrapper)(customParser) loads the compilation of React building blocks
// — (parser.ReactWrapper)(jsonReconciler): React into JSON chains conditions (… './parsingFlow.js')
//		— (./logic/{{…}}) are definitions of 
//		… {{example}} [!!!]

// 		— (./expressions/{{…}})(${blocks}) form layout
//		… 'orderedList.js' has a proposition of component and expression chain integration 
//



import _ from 'lodash'


const exampleDictionaryTrie = {
	"landmine": {
		"d": { 
			$: 0,
			"ing": { $: 0 }
		},
		"k": {
			$: 0,
			"ing": { 
				$: 0
			}
		}
	}
}



/*


Build a list of examples to demonstrate use:
— 


This implementation is supplemented by another layer,
which further evaluates matching results …
— if relative distances match
…


With the following assertions, that: …

— in JavaScript there's no difference if object key is
in "brackets" or not in brackets

… it can be concluded from example parser trie that:

— a string is an expression when it contains 
	an object key ("expressions", "expr" or "e") which contains an array
(of bindings to expression and block evaluation functions)
— an object key which contains more than one expression will return 
	pattern recurrence count for whole sequence


*/
const egParserTrie = {

	// "[\s.*\s]*": { // This pattern is not supported by Regex
	Paragraph: {
		e: [ { ParserName: blockFnBinding } ],
		s: true,
		"#leapgesture": {
			e: [ { HashtagParser: expressionFnBinding } ],
			"\s.*\s": {
				"#[Aa-Zz]{3,}": {
					scoop: true
				}
			}
		},
		"#siebenlinden": {
			e: [ { hashtagParser: expressionFnBinding } ],
			"(?=obst|fruit)": {
				".*": {
					"[AÄ]pfel": { $: 0 }
				}
			},
			"[AÄ]pfel": {
				".*": {
					"(?=obst|fruit)"
				}
			}
		}
	}

	"SOF": {
		e: [
			{	DictionaryExpression: ExpressionFnBinding, scoop: 0 }
		],
		"\s": {
			"[Aa-Zz]*": {
				"\n*": {
					$: ['DictionaryExpression']
				},
				"\n": {
					…OnionRightOn
				}
			}
		},
		"[Aa-Zz]*": {
			$: 0,
			"ing": { 
				$: 0
			}
		}
	},

	"\s": {
		".*": {
			regex: 0, // Is previous expression Regex? 0: Both yes and no
			"Fine": {
				caseSensitive: true,
				$: [
					{ DictionaryExpression: ExpressionFnBinding }
				]
			}
		},
		"(": {
			".*": {
				".*": {
					".": {
						$: [
							{ DateExpression: ExpressionFnBinding }
						]
					},
					"/": {
						"[0-9]+": {
							
						},
						$: [
							{ 
								DateExpression: ExpressionFnBinding,
								Args: {
									type: "ISO 8601", // American date format
									required: []
								},
								scoop: true // if false: condition without scoop
							}
						]
					}
				}
			}
		}
	}
}
// This implementation requires expressions to be kept in whole
//(without optimizing tree by creating mid-string branches)



const exampleContent = {
	text: "White rabbit jumps a landmine, which is calibrated to a weight of a larger rock …\r\nTo what end does this statement serve?",
	dictionary: { "expression": { inTrie_dataCanBeAppended: true }, "expressions": { sth_defined: true } }
}




// const matchExpressions = peelTrie

const matchExpressions = (string, conditionsTrie) => {

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
//	Expect an object, where "key" is expression and further "value" object is appended data 
// (eg. parser matching conditions for the , tokenizer scoop definitions,  
//
function buildTrie__appendData(
	expressionsObj, trie,
	matchingConditions = Expressions_std, 
	abTest = 'a' ){


	var currentWordPart,
		currentSubTrie = {},	// Decompose trie (eg. onion peels)
		bufferLength = matchingConditions['_bufferLength']


	// Parser need be aware of any undivided stream of …
	// 	1) expressions of conditions or 
	// 	2) words or phrases (of common and special characters) coming in,
	//		which may be longer than the maximum singular expression


	if(	typeof expressionsObj === 'object'){ 
		// _.forEach might involve avoiding errors with empty/incompatible objects [!!!]

		// Loop through provided expressions …
		_.forEach( expressionObj, (expression) => {

			// Essentially the same as … (might deserve an AB test [!!!])
			/*
				for( var i = 0, l = expressions.length ; i < l ; i++ ){
				var expression = expressions[i],
			*/


			for( var i = 0 ; i < expression.length ; i++ ){

				var letters = (abTest == 'a') ? expression.split("") : null,
					letter = (abTest == 'a') ? expression.charAt(i) : letters[i],

					currentWordPart += letter


				if( i == 0 ){

					currentSubTrie = (typeof trie[letter] !== 'undefined') ? trie[letter] : null

				} else {

					// … find the longest match within current subTrie
					if(typeof currentSubTrie[ currentWordPart ] !== 'undefined'){

						currentSubTrie = currentSubTrie[ currentWordPart ]
						currentWordPart = ""
					}
				}

				// Create new Trie (sub)structure
				if( currentSubTrie == null ){
					currentSubTrie[letter] = { }
				}
			}

		})

		return trie
		


				/*

				Traversing trie data object, inserting new string parts

				*/
				

				// Get value from tree
				
				

			}
		}

		/*

		Running trie optimizations (as seen with github.com/jeresig/trie-js implementation)

		*/
	}
}
//
/*

# About Trie and possible character combinations in one word …
— [InternationalAlphabet_withNationalVariations.length] ^ []
— Density of words within a stream of characters (interlaced, converging and diverging words)
	is in a reverse-reciprocal relationship with 


# Contains abTest variable, where 'a' is a scenario, presupposed by implementation author

a) expression (aka. string) is divided into an array of single characters
b) a number of characters are read from string directly (perhaps sliced away to reduce load)
… both cases, a buffer is there to keep track of defined subset of regex-alike matching conditions, applied in each case (eg. subset of RegExp, etc)

*/
//



  /////////////////////////////////////
//  From: github.com/jeresig/trie-js  //
  ////////////////////////////////////


function optimize( cur ) {
	var num = 0, last;

	for ( var node in cur ) {
		if ( typeof cur[ node ] === "object" ) {
			var ret = optimize( cur[ node ] );

			if ( ret ) {
				delete cur[ node ];
				cur[ node + ret.name ] = ret.value;
				node = node + ret.name;
			}
		}

		last = node;
		num++;
	}

	if ( num === 1 ) {
		return { name: last, value: cur[ last ] };
	}
}

function suffixes( cur, end ) {
	var hasObject = false, key = "";

	for ( var node in cur ) {
		if ( typeof cur[ node ] === "object" ) {
			hasObject = true;

			var ret = suffixes( cur[ node ], end );

			if ( ret ) {
				cur[ node ] = ret;
			}
		}

		key += "," + node;
	}

	if ( !hasObject ) {
		if ( end[ key ] ) {
			end[ key ].count++;

		} else {
			end[ key ] = { obj: cur, count: 1 };
		}

		return key;
	}
}

function finishSuffixes( cur, keepEnd, end ) {
	for ( var node in cur ) {
		var val = cur[ node ];

		if ( typeof val === "object" ) {
			finishSuffixes( val, keepEnd, end );

		} else if ( typeof val === "string" ) {
			cur[ node ] = keepEnd[ val ] || end[ val ].obj;
		}
	}
}

  //                                //
//   \\ github.com/jeresig/trie-js    //
  //                                //







//
// Function returns a reduced list of expressions
// … and calculates bufferLength, if necessary
///
function pickExpressions(	expressionList, 
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

		bufferLength = expressionList['_bufferLength']
	}

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


	return expr_maxLen + suffix_maxLen
}




	////////////////
//////  Appendix  //////
	////////////////


// More in "./parser.runtime.offloaded.js"





// Example: XML to JSON with use of Regex:
// https://stackoverflow.com/questions/15675352/regex-convert-xml-to-json 




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