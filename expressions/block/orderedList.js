

import React from 'react'
import { Scenario, MatchOneOf as OneOf, ExpressionChain as Chain, Trie } from '../logic' // Logical operators
import { SOF, EOF } from '../blocks' // Layout blocks




const orderedList = (props) => {


	const numberedListItemSupposition = (input, processorObj) => {

		end = 1
		for (i = input.first ; i < end ; i++){

			if( matchingExpression ){

				end++
				return { i }
			}
		}
	}

	const expressions = {
		// "SOF",đ
		{ __trieChain: {
			".*": 
		} },
		{ __trieChain: {
			"[0-9]+\s*": {
				__id: "{{1}}",
				__expr: "numberedListItem",
				__fn: ["numberedListItem", numberedListItem]
			},
			"[Aa-Zz]+\s*": {
				__id: "{{1}}",
				__expr: "alphabeticalListItem"
			}
		},
		// "EOF",
		__suffixList: [".", ")", " )"],
	}

	render(){
		return (

			<Scenario>
				<ExpressionChain>

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

			<Trie 

		)
	}
}