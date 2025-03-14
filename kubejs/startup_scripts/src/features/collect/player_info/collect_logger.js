const CollectLogger = {
  playerCollection (event) {
    let collectedObjs = PlayerDataHelper.getPlayerList(
      event,
      CollectConst.playerCollectedDataKey
    )
    let allCollectibleIds = CollectCaches.allCollectibleIds
    let collectedObjInList = []
    for (let collectedObj of collectedObjs) {
      if (allCollectibleIds.includes(collectedObj)) {
        collectedObjInList.push(collectedObj)
      }
    }
    return collectedObjInList
  },
  logCollectible (event, collectibleId) {
    PlayerDataHelper.addToPlayerList(
      event,
      CollectConst.playerCollectedDataKey,
      collectibleId
    )
  },
  playerCollectionByCategory (event, categoryId) {
    let collectedObjsInCategory = []
    let collectedObjs = PlayerDataHelper.getPlayerList(
      event,
      categoryId
    )
    for (let collectedObj of collectedObjs) {
      if (CollectCaches.categoryLists[categoryId].includes(collectedObj)) {
        collectedObjsInCategory.push(collectedObj)
      }
    }
    return collectedObjsInCategory
  },
  logCollectibleByCategory (event, collectibleId, categoryId) {
    PlayerDataHelper.addToPlayerList(
      event,
      categoryId,
      collectibleId
    )
  },
  clearCollectibles (event) {
    for (let categoryId of CollectListHelper.allCategoryIds) {
      PlayerDataHelper.clearKey(
        event,
        categoryId
      )
    }
    PlayerDataHelper.clearKey(
      event,
      CollectConst.playerCollectedDataKey
    )
  }
}