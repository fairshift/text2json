

import React from 'react'
import { // Logical operators — now building a necessary set (with usecases)
	Scenario, MatchOneOf as OneOf, 
	ExpressionChain as Chain, Trie,
	ExpressionJSON as ExprJS,
	Scoop } from '../logic' 
import { SOF, EOF } from '../blocks' // Layout blocks

import { escapeExpression as e } from '../util' // function unexistent here yet [!!!]




const orderedList = (props) => {


	// Compatible blocks in which this expression can appear
	var within = {
		std: ["Paragraph", ""],
		parserName: [""],
		parserName_2: [""]
	}
	// … Is extensible
	if(_.isObject(props.within))
		within = _.merge(within, props.within)


	var numberedItem = {
		expr: "numberedItem",
		match: (input, db) => {

			var previousListItem = db
				.get('tokens')
				.filter({ expr, block } => 
					expr == 'numberedItem' && 
					block == (''))
				.recent(1)
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