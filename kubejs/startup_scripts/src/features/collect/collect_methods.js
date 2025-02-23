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

      let milestoneRewardOwed = CollectHelper.collectionRewardOwed(event, collectionId)
      if (milestoneRewardOwed) {
        CollectHelper.handleMilestoneReached(event, collectionId)
      } else {
        EventMethods.tellPlayer(event, CollectHelper.nextMilestoneRewardMessage(event, collectionId))
        CollectHelper.tellPlayerCollectionProgress(event, collectionId)
      }

      if (CollectHelper.subCollectionCompleted(event, subCollectionId)) {
        CollectHelper.handleSubCollectionCompleted(event, subCollectionId)
      } else {
        CollectHelper.tellPlayerCollectionProgress(event, subCollectionId)
      }
    }
  },
  debugClearPlayerCollection: (event) => {
    if (EventGetters.isPlayerShifting(event)) {
        CollectLogger.clearCollectibles(event)
        EventMethods.tellPlayer(event, Text.translate('item.kubejs.debug_clear_player_collection.message'))
    }
  },
  get isCollectListCategoriesValid () {
    let categories = CollectListHelper.categoryIds
    let length = categories.length
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if (categories[i] === categories[j]) {
          return false
        }
      }
    }
    return true
  } 
}