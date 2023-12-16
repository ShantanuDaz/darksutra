/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nbuidewbej5nf2x")

  collection.listRule = "@request.auth.id != '' && @request.auth.username = 'darksutra'"
  collection.viewRule = "@request.auth.id != '' && @request.auth.username = 'darksutra'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nbuidewbej5nf2x")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
