



import React from 'react'


import { // Logical operators — now building a necessary set (with usecases)
	Scenario, MatchOneOf as OneOf, 
	ExpressionChain as Chain, Trie,
	ExpressionNativeJS as Expr,
	Scoop } from '../logic'

import { Headline as H, Paragraph as P } from '../blocks' // Layout blocks

import { escapeExpression as e } from '../util' // function unexistent here yet [!!!]


/*
const exampleContent: "

	# Überschrift (aha!)

	Here is etwas
	1. Erste
	2. Zweite
	3. …

"
*/


export default function orderedList (props) {


	//
	// Content blocks in which this expression can appear
	//(even when not explicitly declared)
	//
	this.compatible = { 
		in: { // Needless to declare: "Document.*"
			text2json: ["Section", "Paragraph"],
			parserName: [""],
			parserName_2: [""]
		},
		contains: {
			parserName: ["Expressions", "Blocks"]
		},
		with: { // Both wrapped "in" or "contains"
			parserName: ["Expr", "Block"]
		},
		not: {
			parserName: ["Expr", "Block"]
		}
	}
	// … Is extensible 			[!!! ; consider implementing a ]
	if(_.isObject(props.in))
		compatible.in = _.merge(compatible.in, props.in)


	this.symbols = {}


	this.NumberedItem = {
		expr: "numberedItem",
		compatible: {
			in: { ...compatible },
			contains: { ...compatible },
			ruleOut: { ...compatible }
		},
		symbols: {
			opening: {
				"[0-9]+\.\s": ["md", "text2json"],
				"[0-9]+\s{0,1}\)\s+": ["text2json"],
				"[0-9]+\s+": ["text2json"]
			}
		},
		match: (input, el, db) => {


			// Does the previous list item somehow share the same block?
			//
			// Conditions must be met (descending by priority — higher priority first):
			// — at least two items with an ascending order of numbers exist at same indentation
			// — no elements with a lower depth from tree root exist in between two items
			//	(ie.: left in tree ~ with a smaller indentation)
			var previousListItem


			// 1) run a query (when expression doesn't issue temporary tokens)
			previousListItem = db
				.get('tokens')
				.queryTx({	// … 
					expr: el.expr,
					parser: null,
					with: compatible,
					// When retrieving token data …
					ref: 123,				// — shares one of the same containers
					treeDepth_current: 123, // — is on the same level as previous token
					treeDepth_search: 3,		// — will traverse tree of tokens N levels
					// Sorting results
					sort: "desc",
					limit: 1,
					recent: 1 // shorthand for the above two parameters
				})
				.value()

			// 2) or check cache (when expression)
			previousListItem = db
				.get('tokens.cache')
				.find({ expr: el.expr, blocks: '!!!' }) // … matching IDs
				.recent(1)
				.value()


			end = (previousListItem) ? previousListItem.index : 1
			for (i = input.first ; i <= end ; i++){

				if( matchingExpression ){

					end++

					db.get('parser.runtime').setBufferLen(this.expr) // [!!!] Pass expression/block token ID
				}
			}

			db.get('parser.runtime').resetBufferLen(this.expr) // [!!!] Pass expression/block token ID


			return { i }

		},
		trie: {  }
	}
	// … Is extensible
	if(_.isObject(props.NumberedItem.symbols))
		NumberedItem.symbols = extendSymbols(NumberedItem.symbols, props.symbols)


	return (

		<OrderedList componentLang="en">

			<Scoop>

				<H />
				<P />

				<OneOf resolve="auto">
					<Scenario>
						<Expr with="{this.NumberedItem}">
							{children}
{ /*

	Expressions which are repeated should	not overload the 
	Trie parser structure	with recurrence. Rather, they should be	
	separately listed in a non-parsable category.

								<Scenario>
									{children}
								</Scenario>
								<Scenario>
									{children}
								</Scenario>
*/ }
						</Expr>
					</Scenario>

					<Scenario>
						<Expr with="{this.AlphabeticalItem}">
							{children}
						</Expr>
					</Scenario>
				</OneOf>

			</Scoop>

		</OrderedList>
	)
}


