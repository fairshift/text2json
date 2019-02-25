

export default ExpressionsMap


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


import React from 'react'
import Reconciler from 'react-reconciler'
import CustomParser from './parserReactWrapper'


/*

## React.js way of building component trees:

— Components are XML tags
	… which expect nested elements inside: 		<ExpressionName> & … content … & </ExpressionName>
	… or bring in a component at a certain point in document flow: 		<ExpressionName />

— Components are further defined by "props" or properties, which are in general always passed to components
	… which should have a way of dealing with them, or passing them forth,
	… in direction from the component on the left in a tree of indented components, to the right onto nested one(s):
		<ExpressionComponent_1 prop_1={props.props_1}>
			<ExpressionName {...props} />
		</ExpressionComponent_1

*/


const ExpressionsMap = (props) => {
	return (
		<CustomParser>
			…
			<ScenarioRoute {...props} >
				…
			</ScenarioRoute>
			<ScenarioRoute {...props} >
				…
			</ScenarioRoute>
			…
		</CustomParser>
	)
}




/*

## Terms to squeeze in components:

— database-related component names & props: collection / table ; mapTo
— …




… From './index.js' :

*/


// React.js components always have first character capitalized
const CustomParser_RootStructure = {
	invoke: 	null
	match: 		null
	invoke: 	null
	tokenize: 	null
	map: 		null
	config: 	null
}

// Some terms
/*
export { match, invokeExpr, tokenize, map, config }
import { DictionaryMatch, Paragraph, DateTime, Heading, Line, Sentence } from '../common-expressions'
import { generateId_hashids, regexParentheses, regexSquareBrackets } from '../util'
*/


// Some more terms
/*
expr, args, 
conditions, s, l, x,
caseSensitive, 
sl_SL, en_EN, 
keys, 'sl_SL.formal', '#leapgest', 
extend, tree, flat, inBetween, 
Heading['foremost'], 
from, 
createTemporaryId__fn, 
trim, 'auto', 
charReplacements, 
schema, './schema.json'
*/