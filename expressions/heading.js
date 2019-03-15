
export default HeadingWithExtension
export { Heading }


import { exprExtend, expression_initExtensions, evaluateArgs } from '../fn.expressions'


const Heading = (args) => {

/*
	var requiredByMode = {}
	requiredByMode.test = ['']
	requiredByMode.match = ['']
*/

// … expression code
	
	if(args.expectedByMode == true){
		return {
			optional: ['tree', 'flat']
		}
	}


	
	return null
}


// Requesting parser to find expressions in string in a shorter manner:
// — Heading['topmost'] or Heading.topmost
// — Heading.addArgs({ matchingMode: 'leftmost' })

const Heading_fnExtension = {
	"1st": {
		addArgs: { match__stop: [1], autoselect: [1] }
	},
	"first": "1st",
	"foremost": {
		addArgs: { autoselect__intersection: ['leftmost', 'uppermost'] }
	},
	"all": "default",
	default: {
		addArgs: { match: '*' }
	}
}

const HeadingWithExtension = expression_initExtensions(Heading, Heading_fnExtension)

/*

const Heading_fnExtension = {
	match_1st: {
		addArgs: { match__stop: [1] }
	},
	match_first: 'match_1st',
	autoselect_first: {
		addArgs: { autoselect: [1] }
	},
	autoselect_1st: 'autoselect_first',
	foremost: {
		addArgs: { autoselect__intersection: ['leftmost', 'uppermost'] }
	},
	all: 'default',
	default: {
		addArgs: { match: '*' }
	}
}

*/