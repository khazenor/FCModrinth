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
    let collectedNum = CollectLogger.playerCollectionByCategory(event, categoryId).length
    let collectionSize = CollectCaches.categoryLists[categoryId].length
    let percent = collectedNum * 100 / collectionSize
    EventMethods.tellPlayer(event, Text.translate(
      'collect.generic.collectedMessage',
      CollectCaches.categoryNames[categoryId],
      StrHelper.cleanFloor(collectedNum),
      StrHelper.cleanFloor(collectionSize),
      StrHelper.cleanFloor(percent)
    ))
  }
}