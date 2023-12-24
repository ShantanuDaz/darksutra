/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0ai6kzk9s2w7b4")

  collection.listRule = "@request.auth.id != '' && @request.auth.username = 'darksutra'"
  collection.viewRule = "@request.auth.id != '' && @request.auth.username = 'darksutra'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0ai6kzk9s2w7b4")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
