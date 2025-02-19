const inventoryChangedHandler = (event) => {
  let itemId = InventoryChangedHelper.item(event).id
  if (CollectListHelper.isACollectible(itemId)) {
    let collectionIds = CollectListHelper.collectionIdsOfCollectible(itemId)
    let subCollectionIds = CollectListHelper.subCollectionIdsOfCollectible(itemId)
    EventMethods.tellPlayer(event, `Collection (${collectionIds.length}): [${collectionIds[0]}, ...]`)
    EventMethods.tellPlayer(event, `Sub-collection (${subCollectionIds.length}): [${subCollectionIds[0]}, ...]`)
  }
}