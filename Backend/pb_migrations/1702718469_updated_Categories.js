/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nbuidewbej5nf2x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nfc5wopv",
    "name": "img",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nbuidewbej5nf2x")

  // remove
  collection.schema.removeField("nfc5wopv")

  return dao.saveCollection(collection)
})
