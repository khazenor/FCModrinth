const CollectMethods = {
  checkAndLogCollectible: (event) => {
    let collectibleId = InventoryChangedHelper.item(event).id
    if (CollectHelper.isIdNewCollectible(event, collectibleId)) {
      CollectLogger.logCollectible(event, collectibleId)
      FcLogger.log('checkAndLogCollectible')
      console.log(CollectLogger.playerCollection(event))

      let collectionId = CollectListHelper.collectionIdOfCollectible(collectibleId)
      let subCollectionId = CollectListHelper.subCollectionIdOfCollectible(collectibleId)

      CollectListHelper.updatePlayerCache(event, collectionId)
      CollectListHelper.updatePlayerCache(event, subCollectionId)

      EventMethods.tellPlayer(event,'')
      EventMethods.tellPlayer(event, CollectCache.collectedMessages[collectionId])
      CollectListHelper.tellPlayerCollectionProgress(event, collectionId)
      CollectListHelper.tellPlayerCollectionProgress(event, subCollectionId)
    }
  },
  debugClearPlayerCollection: (event) => {
    if (EventGetters.isPlayerShifting(event)) {
        CollectLogger.clearCollectibles(event)
        delete CollectCache.playerProgress[EventGetters.playerUuid(event)]
        FcLogger.log(`Clear Player Collection: ${EventGetters.playerUuid(event)}`)
        console.log(CollectCache)
        EventMethods.tellPlayer(event, Text.translate('item.kubejs.debug_clear_player_collection.message'))
    }
  }
}