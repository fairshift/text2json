# text2json — customizable parser with an optional Markdown capability
[Repository: github/fairshift/text2json](https://github.com/fairshift/text2json)


This file is a walk through methods and routines of this parser, illustrating some of its functionalities in example (Readme file (which is an illustrative mess) is temporarily displaced in README.default.md)


[...]


To publish on npmjs.com/package/text2json


[...]



*Overview from './parsingFlow.js' (clarity of documentation to achieve in top-level code/documents)*
```js

const parsingFlow_steps = {

	// When to include user or admin input to resolve ambiguities? After …
	// — parseText function: tokens are more native to content itself (enabling representation/overlay)
	// — mapTokensToSchema function: validation is an important part of structuring data

	parseText: [

		'mapExpressions',	// expressions from all parsers in one array
							//(with references to parser components)
		'receiveContext',	// receive context from application container

		// Parse one string/object or loop through files/documents in filesystem
		'documents.forEach',			// custom parser document.js script
			'tokenize(path/filename)',	// custom parser filesystem.js script
				'toContext',			// add tokens to context (= mapping some tokens to a more accessible object)
			'tokenize(document)'		// run through string and expressions
										// … using context when so defined

		// Returns: list of tokens with references ( relative to other tokens ; position in originating content )

	],

	// Mapping flow — run to reduce schema-validated scenarios, then run again with user or admin input
	mapTokensToSchema: [,		// token to JSON schema

		'loadSchemas',					// for each parser, which created tokens
		'findTokens',					// find tokens in array of objects for each schema (top-most property is collection/table) 
		'tokensToSchema',				// loop through matching tokens for each schema
			'transform',				// transform functions
			'map',						// to schema
			'validate',					// which scenarios match schema

		// Returns: validated datasets, structured according to a schema (either in SQL or NoSQL shape)
		//			(object could optionally return results which didn't pass validation against JSON schema)
	],

	// Tokenize flow (wrapper function) — match sequence of conditions, return an array of potential matches
	tokenize: [
		/*
			'matchExpressions',	// loop …
				'nextMatch',	// find 1st following match for any potential expressions (1st conditions first …)
									// remove expressions without a match
									// create array of potentially matching expressions
									// sort array by occurence
									// repeat
				'scoop',		// push content to tokens (with optional nearby content)
			'createTokens',		// create tokens where there's no ambiguities
			'createScenarios',	// create various scenarious where there's multiple possibilities 
								//(to resolve by user / admin input)

			'parserSignatures',	// append signatures of active parsers
								//(??? think through validation)mapping wrapper function
		*/

		// Returns: singular streams of tokens and unresolved possible scenarios
	]
};
```


*Logical operators from './logic/layouts.jsx' used in expressions (in './expressions' and custom parser mappings)*
```js

import { Scenarios, Pattern, Optional } from '../logic'

//
// Playing with a standard form of structuring content
// … which can contain an array of possible expressions
//
const Article_std = () => {

	return (

		<Scenarios>

			<Pattern root name="outlay" >
				<Heading foremost>
					<Optional>

					</Optional>
				</Heading>
				<Paragraph repeat interchangeable >
					<Sentence repeat >

					</Sentence>
				</Paragraph>
			</Pattern>

			<Pattern openEnded name="" >
				<Heading any>
					<Optional>

					</Optional>
				</Heading>
			</Pattern>

		</Scenarios>
	)
}

```


*Logical operators from './logic/layouts.jsx' used in expressions (in './expressions' and custom parser mappings)*
```js

import { Scenario, MatchOneOf as OneOf, ExpressionChain as Chain, Trie, Scoop } from '../logic' // Logical operators
import { SOF, EOF } from '../blocks' // Layout blocks
import { escapeExpression as e } from '../util' // [!!!] function not existing yet


const orderedList = (props) => {


	const numberedListItemSupposition = (input, processorObj) => {

		end = 1
		for (i = input.first ; i < end ; i++){

			if( matchingExpression ){

				end++
			}
		}

		return { i }
	}


	const expressions = {
		// "SOF",đ
		{ __trieChain: {
			".*": 0
		} },
		{ __trieChain: {
			"[0-9]+\s*": {
				__id: "{{1}}",
				__expr: "numberedListItem",
				__fn: ["numberedListItemSupposition", numberedListItemSupposition],
				__fnArgs: { 
					get: "tokens.index",
					find: {
						any: [
							{ key: {{value}} },
						],
						all: [
							{ key: {{regex}} },
							// _.filter(result, obj => /^[a-zA-Z]/.test(obj.name));
						]
					}
				}
			},
			"[Aa-Zz]+\s*": {
				__id: "{{1}}",
				__expr: "alphabeticalListItem",
			}
		} },
		// "EOF",
		__suffixList: [".", ")", " )"],
	}


	render(){
		return (

			<Scenario>
				<ExpressionChain src="{this.expressions}" >
					<Incomplete ...props />
				</ExpressionChain>
			</Scenario>

			<Scenario>
				<Scoop>
					<OneOf>

						<Chain>
							<Headline />
							<Paragraph />
						</Chain>

						<Headline />

						<Paragraph />

					</OneOf>
				</Scoop>
			</Scenario>

		)
	}
}

```


*An example of a simple Trie structure, which contains words: ["word", "work", "working", "wording"]. Such structures contain undivided streams of functionable expressions (Trie chains) and are compared with document in parsing, in flow, generating singular streams of tokens and diverging scenarios of possible streams of tokens.*
```js

	const exampleTrie = {
		"wor": {
			"d": { 
				$: 0,
				"ing": { $: 0 }
			},
			"k": {
				$: 0
				"ing": { 
					$: 0,
					""
				}
			}
		}
	}

```


An example of a structured document, which is parsed to JSON format from a file found in './parsers/working-hours-online-offline/sample/(2019) Leap second/( February ; Fb@santappl ) Parser.txt'
```
	Parser function(alitie)s
	
		13:00 ~ 15:20 11.2.2018: initExpressions functions ; simplifying gesture-tree parser init expressions
		17:00 ~ 17:30 *: lowdb implementation ; parser object with exposed functions and DB

		14:00 ~ 15:30 12.*: Code clarity and proper file structure — commenting export functions (first position in file)
		16:15 ~ 17:15 *: Restructuring expressions and defining a common input schema @KinoŠiška
		17:45 ~ 18:55 *: Defining parser flow @Pritličje
		21:30 - 21:58 *: Defining parser flow // When to include user or admin input to resolve ambiguities — after parseText or mapTokensToSchema?
		21:58 - 22:09 *: *

		13:55 - 16:45 14.*: Parser input schema through custom parser declaration ("gestures-tree") ; Updating expressions @Pritličje
		17:05 - 19:15 *: Expression wrapper with validation and shortcut extensions (with additional arguments) @Pritličje
		13:00 ~ 22:30 (4h) 18.*: * ; Testing JavaScript object of functions, wrapped functions and passing arguments from various sources

		10:45 ~ 13:45 19.*: Researching 'trie' data structure packages and 'parallel regex' (found on npmjs.com: 'triejs', 'regexgen') ; Researching intuitive ways of declaring the conditions to find/match content (find what is expected) and scoop/extract insides or context (what is contained or surrounding it) with 'react-reconciler' in XML/React style
		14:45 - 16:20 *: Researching 'react-reconciler' for XML parser component definitions
		18:00 ~ 22:02 (2h) *: Search engine results lead me to think about my own loop to check a string for multiple expressions in one pass ; Regex parsed by 'regexgen' package insufficiently returns two tokens (and not three) when root and suffix of one word are two distinct, mapped words, too

		9:00 ~ 12:30 20.*: Having fun with github.com/jeresig/trie-js implementation (build-trie file only), where a freshly assigned variable named "trie", which should be empty by expectations, contains the result expected after the for loops building the data tree are run (without any scripts referencing to it or assigning value to it — screenshots and witty comments found on Facebook.com/santappl in a today's post)
		13:30 ~ 16:15 (1h 30min): Working on a buildTrie function 'ground-up', to allow embedding of custom data nodes for each keyword or keyphrase, and to allow for nesting custom longer patterns in between
		17:00 ~ 18:00: Drafting React-based content block patterns and scenarios ; Drafting main runtime parsing functions (matchExpressions, buildTrie_fromObject) and auxiliary ones (pickExpressions, minBufferLength_calculate) ; Drafting a subset of regex-based matchingConditions

		16:15 ~ 18:30: [messy] Consolidating React (XML) and JSON datatypes with Trie expression parsing function (in conceptualization) @Pritličje

		18:40: Drafting a walkthrough in README.md
```


The chosen way of transforming XML to JSON is by use of 'react-reconciler' package (npm.js/package/react-reconciler). However, at this point it is unclear as to what extent React's capacity to update rendered components in part will have come useful —


Meanwhile? Some resources can be found at [lepagesta.org](http://lepagesta.org), while a good example where this parser will be useful on social media can be found at profile of [Fb/@santappl](https://facebook.com/santappl)