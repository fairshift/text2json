

export { queryTx }

import _ from 'lodash'



//
// Schema: Normalized flat array of token objects
//				(needs to be provided for any )
//
const flatArraySchema = {

	// Optional: if tokens have ID numbers assigned
	id__key: "id",
	id__transformKey: () => {},

	// Relational parameter
	ref__key: "ref",
	ref__transformKey: () => {},

}


const queryTx = function(tokens, args, flatArraySchema = null) {

	args = (args) ? args : {
		_expr_: "", 		// Expression/block component name
		_parser_: null,	// Parser package name
		_with_: "", 		// Compatible,
		// When retrieving token data …
		_ref_: 123,								// — shares one of the same containers
		_treeDepth_current_: 123, // — is on the same level as previous token
		_treeDepth_search_: 3,		// — will traverse tree of tokens N levels
		// Sorting results — same as shorthand { recent: 1 }
		_sort_: "desc",
		_limit: 1,
		// Return only one result
		_recent_: 1 // 
	}

	if(flatArraySchema = null)
	_.filter(tokens, )

	var result = []

	// 'Sit best to wrap an array query in a hand-crafted sorting function?
	tokens.forEach((obj) => {


				//////////////
		//						/ ///
		// Hier isst die Funkzion diese Objekte
				////////
			///			// / ///
				/////////////

	})

	return result
}