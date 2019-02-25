
import React from 'react'
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