/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ublv46m2ez7186n",
    "created": "2023-12-24 08:32:59.026Z",
    "updated": "2023-12-24 08:32:59.026Z",
    "name": "About_Us",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gxkafyv0",
        "name": "AboutUS",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ublv46m2ez7186n");

  return dao.deleteCollection(collection);
})
