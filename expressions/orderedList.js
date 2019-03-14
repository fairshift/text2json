



import React from 'react'


import { // Logical operators — now building a necessary set (with usecases)
	Scenario, MatchOneOf as OneOf, 
	ExpressionChain as Chain, Trie,
	ExpressionNativeJS as Expr,
	Scoop } from '../logic'

import { Headline as H, Paragraph as P } from '../blocks' // Layout blocks

import { escapeExpression as e } from '../util' // function unexistent here yet [!!!]


/*
const exampleContent = /

	# Überschrift (aha!)

	Here is etwas
	1. Erste
	2. Zweite
	3. …

/;
*/


const orderedList = (props) => {

	// Sym
	var symbols = {
		opening: {
			"-": ["text2json"],
			"—": ["text2json"],
			"—": ["text2json	"]
		}
	}


	//
	// Content blocks in which this expression can appear
	//(even when not explicitly declared)
	//
	var compatible = { 
		in: { // Needless to declare: "Document.*"
			text2json: ["Section", "Paragraph"],
			parserName: [""],
			parserName_2: [""]
		},
		NumberedItem: {
			in: {
				text2json: ["Section"],
				parserName: [""]
			},
			parserName: [""]
		},
		AlphabeticalItem: {
			in: {
				text2json: ["Document"]
			}
		}
	}
	// … Is extensible
	if(_.isObject(props.in))
		compatible.in = _.merge(compatible.in, props.in)


	var NumberedItem = {
		expr: "numberedItem",
		symbols: {
			opening: {
				"[0-9]+\.\s": ["md", "text2json"],
				"[0-9]+\s{0,1}\)\s+": ["text2json"],
				"[0-9]+\s+": ["text2json"]
			}
		},
		get match(input, db){

			var previousListItem = db
				.get('tokens')
				.queryTx({	// … 
					expr: this.expr,
					parser: null,
					with: compatible,
					// When retrieving token data …
					ref: 123,				// — shares one of the same containers
					treeDepth_current: 123, // — is on the same level as previous token
					treeDepth_search: 3,		// — will traverse tree of tokens N levels
					// Sorting results — same as shorthand { recent: 1 }
					sort: "desc",
					limit: 1
				})
				.value()


				// Does the previous list item somehow share the same block?
				//
				// Conditions must be met (higher priority first):
				// — there is an ascending order of numbers with no gaps

				var previousListItem = db
					.get('tokens.cache')
					.find({ expr: "numberedItem", blocks })
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
	}
	// … Is extensible
	if(_.isObject(props.NumberedItem.symbols))
		NumberedItem.symbols = extendSymbols(NumberedItem.symbols, props.symbols)

	render(){
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
}


