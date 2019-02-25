# text2json — customizable parser with an optional Markdown capability
[Repository: github/fairshift/text2json](https://github.com/fairshift/text2json)

Starting simple … Don't bother running scripts in this repository just yet — project is in active production, but it doesn't work at this moment, at all. Reading is mandatory for understanding of it's functioning.



To publish on npmjs.com/package/text2json



Internationalization of messages for guided input templates and schema mismatch can be provided by specific parsers (in format used also by "intl" and "react-intl" npm packages)...

Anyway, it's nice to know there's a way to do work while not having computer on shoulders. Hence, a block of text with illustrative examples can be found in …

Readme.txt (which is updated more often than this repository)


*From './parsingFlow.js' (clarity of documentation to achieve in top-level code/documents — don't mind the gaps by difference of indentation, eg. 2 spaces vs. 4 spaces)*
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
		'documents.forEach',					// custom parser document.js script
			'tokenize(path/filename)',	// custom parser filesystem.js script
				'toContext',							// add tokens to context (= mapping some tokens to a more accessible object)
			'tokenize(document)'				// run through string and expressions
																	// … using context when so defined

		// Returns: list of tokens with references ( relative to other tokens ; position in originating content )

	],

	// Mapping flow — run to reduce schema-validated scenarios, then run again with user or admin input
	mapTokensToSchema: [,		// token to JSON schema

		'loadSchemas',				// for each parser, which created tokens
		'findTokens',					// find tokens in array of objects for each schema (top-most property is collection/table) 
		'tokensToSchema',			// loop through matching tokens for each schema
			'transform',				// transform functions
			'map',							// to schema
			'validate',					// which scenarios match schema

		// Returns: validated datasets, structured according to a schema (either in SQL or NoSQL shape)
		//				 (object could optionally return results which didn't pass validation against JSON schema)
	],

	// Tokenize flow (wrapper function) — match sequence of conditions, return an array of potential matches
	tokenize: [
		/*
			'matchExpressions',	// loop …
				'nextMatch',			// find 1st following match for any potential expressions (1st conditions first …)
													// remove expressions without a match
													// create array of potentially matching expressions
													// sort array by occurence
													// repeat
				'scoop',					// push content to tokens (with optional nearby content)
			'createTokens',			// create tokens where there's no ambiguities
			'createScenarios',	// create various scenarious where there's multiple possibilities 
													//(to resolve by user / admin input)

			'parserSignatures',	// append signatures of active parsers
													//(??? think through validation)mapping wrapper function
		*/

		// Returns: singular streams of tokens and unresolved possible scenarios
	]
};
```


*From './parsers/gestures-tree/index.jsx'*
```js

/*

Reconsidering the style of defining expression's conditions, scoop and mapping declaration structure
… in relation to './index.js'

*/

// … could it be better founded with XML trees? (intuitive design)
//   » github.com/nitin42/Making-a-custom-React-renderer/blob/master/part-one.md

// … could parsing gain efficiency with conditions and boundaries transpiled in Trie data structure (with runtime data)?
//   » medium.freecodecamp.org/regex-was-taking-5-days-flashtext-does-it-in-15-minutes-55f04411025f
//   » johnresig.com/blog/javascript-trie-performance-analysis/

// … w/ thin "dictionaries", can Regular Expressions match declared expressions in string/text/document, efficiently (enough)?
//   » github.com/devongovett/regexgen (merging Trie lists of sequences, processed in one pass)
//   » npmjs.com/package/triejs


import React from 'react';
import {Triejs} from 'triejs'
import {Trie} from 'regexgen'
import _ from 'lodash'
const Reconciler = require('react-reconciler');

```