

import lowdb from 'lowdb'




export const initDB = (	dbAdapter = "Memory", 
												args = {
													dbSource = null,
													defaults: { 
												  	tokens: testDatasets.tokens, 
												  	context: {}
												  }
												}) => {


  // LowDB initialization
  switch (dbAdapter) {

    case "Memory":
      var Memory = require('lowdb/adapters/Memory')
      dbAdapter = new Memory()
      break

    case "LocalStorage": // Browser
      var LocalStorage = require('lowdb/adapters/LocalStorage')
      dbAdapter = new LocalStorage( args.dbSource )
      break

    case "FileAsync": // Server-side
      var FileAsync = require('lowdb/adapters/FileAsync')
      dbAdapter = new FileAsync( args.dbSource )
      break
  
    default:
      break
  }


  db = lowdb( dbAdapter )

  db.defaults( args.defaults ).write()


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