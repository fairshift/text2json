

import lowdb from 'lowdb'




export const initDB = (dbAdapter = "Memory", dbSource = null) => {


  // LowDB initialization
  switch (dbAdapter) {

    case "Memory":
      var Memory = require('lowdb/adapters/Memory')
      dbAdapter = new Memory()
      break

    case "LocalStorage": // Browser
      var LocalStorage = require('lowdb/adapters/LocalStorage')
      dbAdapter = new LocalStorage(dbSource)
      break

    case "FileAsync": // Server-side
      var FileAsync = require('lowdb/adapters/FileAsync')
      dbAdapter = new FileAsync(dbSource)
      break
  
    default:
      break
  }


  db = lowdb( dbAdapter )

	db._.mixin({
		queryTx: function(tokens, args) {

			args = (args) ? args : {
				expr: "", 		// Expression/block component name
				parser: null,	// Parser package name
				with: "", 		// Compatible,
				// When retrieving token data …
				ref: 123,								// — shares one of the same containers
				treeDepth_current: 123, // — is on the same level as previous token
				treeDepth_search: 3,		// — will traverse tree of tokens N levels
				// Sorting results — same as shorthand { recent: 1 }
				sort: "desc",
				recent: 1 // 
			}

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
		},
	  recent: function(array, limit = 1, orderBy = ['id'], order = 'desc') {

	    console.log(array)
			array = _.orderBy(array, orderBy, order)

	    return (limit == 1) ? _.head(array) : _.slice(array, 0, limit)
	  }
	})

  db.defaults({ 
  	tokens: testDatasets.tokens, 
  	context: {} 
  }).write()


  return db
}


const testDatasets = {
	tokens: [
		{
			_id_: 1,
			_block_: "Document",
			_a_: 0,
			_z_: 240
		},
		{
			_id_: 2, // [By which shortcut did this symbol land in here? » ¯id_: 2]
			_block_: "Section",
			_a_: 12,
			_b_: 89,
			_L_: 1
		},
		{
			_id_: 3,
			_block_: "Paragraph",
			_ref_: 1,
			_L_: 2
		},
		{
			_id_: 4,
			_block_: "orderedList",
			_ref_: 2,
			_L_: 3
		},
		{
			_id_: 5,
			_expr_: "numberedItem",
			_ref_: 3,
			_val_: "White rabbit jumps a landmine, which is calibrated to a weight of a larger rock …\r\nTo what end does this statement serve?"
			_L_: 4
		}
	]
}