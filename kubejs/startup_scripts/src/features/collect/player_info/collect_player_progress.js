const CollectPlayerProgress = {
  categoryCompletionPercent (event, categoryId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, categoryId).length
    let collectionSize = CollectCaches.categoryLists[categoryId].length
    let percent = collectedNum * 100 / collectionSize
    return percent
  },
  numUntilNextMilestone (event, collectionId) {
    let nextMilestone = CollectMilestoneMethods.nextMilestoneForCollection(
      collectionId,
      collectedNum
    )
    let collectedNum = CollectLogger.playerCollectionByCategory(event, collectionId).length
    let numUntilNextMilestone = nextMilestone - collectedNum
    return numUntilNextMilestone
  }
}