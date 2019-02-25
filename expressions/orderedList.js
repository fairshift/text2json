

import React from 'react'
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