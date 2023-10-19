/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a2549uiocteafrn")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.username = \"darksutra\""
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.username = \"darksutra\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a2549uiocteafrn")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.username = \"darksutra2\""
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.username = \"darksutra2\""

  return dao.saveCollection(collection)
})