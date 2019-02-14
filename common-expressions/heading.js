
export default HeadingWithExtension
export { Heading }


import { expressionWrapper, evaluateArgs } from './util'


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

const HeadingExtension = {
	firstTopmost: {
		match: ['firstTopMost']
	},
	topmost: {
		match: ['TopMost']
	},
	all: {
		match: ['all']
	},
	default: {
		match: ['all']
	}
}

const HeadingWithExtension = expressionWrapper(Heading, HeadingExtension)