

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
			id: 1,
			block: "Section",
			parser: null
		},
		{
			id: 1,
			block: "Paragraph",
			ref: 1
		},
		{
			id: 3,
			block: "orderedList",
			type: "numbered",
			ref: 2
		},
		{
			id: 4,
			expr: "numberedItem",
			ref: 3,
			val: "White rabbit jumps a landmine, which is calibrated to a weight of a larger rock …\r\nTo what end does this statement serve?"
		}
	]
}