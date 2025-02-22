const CollectMethods = {
  checkAndLogCollectible: (event) => {
    let objectId = InventoryChangedHelper.item(event).id
    if (CollectHelper.isIdNewCollectible(event, objectId)) {
      let collectionId = CollectListHelper.collectionIdOfCollectible(objectId)
      let subCollectionId = CollectListHelper.subCollectionIdOfCollectible(objectId)
      CollectLogger.logCollectibleByCategory(event, objectId, collectionId)
      CollectLogger.logCollectibleByCategory(event, objectId, subCollectionId)
      CollectLogger.logCollectible(event, objectId)

      EventMethods.tellPlayer(event, '')
      EventMethods.tellPlayer(event, CollectListHelper.collectedMessage(collectionId))
      CollectHelper.tellPlayerCollectionProgress(event, collectionId)
      CollectHelper.tellPlayerCollectionProgress(event, subCollectionId)
    }
  },
  debugClearPlayerCollection: (event) => {
    if (EventGetters.isPlayerShifting(event)) {
        CollectLogger.clearCollectibles(event)
        EventMethods.tellPlayer(event, Text.translate('item.kubejs.debug_clear_player_collection.message'))
    }
  }
}