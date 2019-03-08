

/*
intoTrie( trieObj, expressions = [ "word", "work",  ], setIndex: boolean, appendObj, 
			keepAsString = buildTrie( flattenMatchingConditions( […] ) )


	expressions.sort()

	forEach( expresssions, (expr)

		
		… step 1: letterByLetter( expr["word"] ) = [ "w", "o", "r", "d" ]
		… step 2: letterByLetter( expr["work"] ) = [ "w", "o", "r", "k" ]
		

		forEach( letterByLetter (= [ "w", "o", "r", "k" ]), (letter)

			letters += letter
			keepAsString = 


			( typeof trieObj === 'object' 	forEach( letterByLetter (= [ "w", "o", "r", "k" ]), (letter)

			&& trieObj[ letters ] ) ? 
				intoTrie( null, ["d", "k"], appendObj )
			:
				( !letters.length ) ? 


		)
	)
)*/




/*

//
// Trie object stores
// — optimization of storage space: parts of words or full words where there's no divergences
// — 
// — 
//

*/


//
// A recurring function, placed into context of an extensible parser
// … Trie input arguments: trieObject.match, .dictionary, .expressions
//
const matchExpressions = peelTrie__fn__expr = ( trieObjects, insert = false, sort = true ) => {

	_.each( trieObjects.match, (expressionBranch) => {

		_.each( trieObjects.dictionary, (dictionaryBranch) => {


			// Function calls itself when matching sequences of words are found
			var passTrieObj = {
				match: trieObjects.match,
				dictionary: dictionaryBranch
			}
			peelTrie( trieObjects, insert, sort )



			// When matching (functional) expressions are found () … [!!!]
			// … expecting replacements for some expressions



			// 



		})


	})
}



		letters += letter
		keepAsString = 


		( typeof trieObj === 'object' 	forEach( letterByLetter (= [ "w", "o", "r", "k" ]), (letter)

		&& trieObj[ letters ] ) ? 
			intoTrie( null, ["d", "k"], appendObj )
		:
			( !letters.length ) ? 

		_.each( trieObjects.dictionary, (dictionaryBranch) => {


		}
		
		keepAsString = buildTrie( flattenMatchingConditions( […] ) )

const buildTrie = ( expressions
/*			(= [ "word", "work" ])
		||	(= { "word": dataToAppend } */ ) => {


	expressions = expressions.sort() 	// Inefficient (traverses twice 
	forEach( expressions, (expr) => {	// the array of expression objects)

		expr.split("")

		/*
		… step 1: letterByLetter( expr["word"] ) = [ "w", "o", "r", "d" ]
		… step 2: letterByLetter( expr["work"] ) = [ "w", "o", "r", "k" ]
		*/
		
	})
}
/*

// — 
// — 
//

*/






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

