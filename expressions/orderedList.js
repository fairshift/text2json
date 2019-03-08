

import React from 'react'
import { // Logical operators — now building a necessary set (with usecases)
	Scenario, MatchOneOf as OneOf, 
	ExpressionChain as Chain, Trie,
	ExpressionJSON as ExprJS,
	Scoop } from '../logic' 
import { SOF, EOF } from '../blocks' // Layout blocks

import { escapeExpression as e } from '../util' // function unexistent here yet [!!!]




const orderedList = (props) => {


	var numberedItem = {
		expr: "numberedItem",
		match: (input, db) => {

			var previousListItem = db.get('tokens')
									.find({ expr: "numberedListItem" }) // [!!!]
									.last()
									.value()

			end = (previousListItem) ? previousListItem : 1
			for (i = input.first ; i <= end ; i++){

				if( matchingExpression ){

					end++
				}
			}

			return { i }
		},
		trie: {
			".*": 0,
			"[0-9]+\s*": {
				__id: "{{1}}",
				__expr: "ListItem",
				__fn: ["numberedListItem", numberedListItem],
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
				},
				// "EOF",
			__suffixList: [".", ")", " )"],
		}
	}


	render(){
		return (

			<Scenario>
				<ExprJS from="{this.numberedItem}" />
			</Scenario>

			<Scenario>
				<Scoop>

				</Scoop>
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