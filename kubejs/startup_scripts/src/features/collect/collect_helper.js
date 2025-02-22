const CollectHelper = {
  isIdNewCollectible (event, objectId) {
    if (CollectListHelper.isACollectible(objectId)) {
      let playerCollection = CollectLogger.playerCollection(event)
      if (!playerCollection.includes(objectId)) {
        return true
      }
    }
    return false
  },
  tellPlayerCollectionProgress(event, categoryId) {
    EventMethods.tellPlayer(event, Text.translate(
      'collect.generic.collectedMessage',
      CollectCaches.categoryNames[categoryId],
      StrHelper.cleanFloor(
        CollectLogger.playerCollectionByCategory(event, categoryId).length
      ),
      StrHelper.cleanFloor(
        CollectCaches.categoryLists[categoryId].length
      )
    ))
  }
}