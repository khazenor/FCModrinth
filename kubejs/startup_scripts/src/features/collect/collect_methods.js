const CollectMethods = {
  checkAndLogCollectible: (event) => {
    let collectibleId = InventoryChangedHelper.item(event).id
    if (CollectHelper.isIdNewCollectible(event, collectibleId)) {
      CollectLogger.logCollectible(event, collectibleId)

      let collectionId = CollectListHelper.collectionIdOfCollectible(collectibleId)
      let subCollectionId = CollectListHelper.subCollectionIdOfCollectible(collectibleId)

      EventMethods.tellPlayer(event,'')
      EventMethods.tellPlayer(event, CollectCache.collectedMessages[collectionId])
      CollectListHelper.tellPlayerCollectionProgress(event, collectionId)
      CollectListHelper.tellPlayerCollectionProgress(event, subCollectionId)
    }
  },
  debugClearPlayerCollection: (event) => {
    if (EventGetters.isPlayerShifting(event)) {
        CollectLogger.clearCollectibles(event)
        EventMethods.tellPlayer(event, Text.translate('item.kubejs.debug_clear_player_collection.message'))
    }
  }
}