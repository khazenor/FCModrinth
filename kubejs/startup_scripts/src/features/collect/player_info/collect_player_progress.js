const CollectPlayerProgress = {
  hasJustCollectedFirstCollectible(event) {
    return CollectLogger.playerCollection(event).length === 1
  },
  categoryCompletionPercent (event, categoryId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, categoryId).length
    let collectionSize = CollectCaches.categoryLists[categoryId].length
    let percent = collectedNum * 100 / collectionSize
    return percent
  },
  numUntilNextMilestone (event, collectionId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, collectionId).length
    let nextMilestone = CollectMilestoneMethods.nextMilestoneForCollection(
      collectionId,
      collectedNum
    )
    let numUntilNextMilestone = nextMilestone - collectedNum
    return numUntilNextMilestone
  },
  nextMilestoneReward (event, collectionId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, collectionId).length
    let nextMilestone = CollectMilestoneMethods.nextMilestoneForCollection(collectionId, collectedNum)
    let nextReward = CollectMilestoneMethods.rewardForCategoryMilestone(nextMilestone, collectionId)
    return nextReward
  },
  nextMilestone (event, collectionId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, collectionId).length
    let nextMilestone = CollectMilestoneMethods.nextMilestoneForCollection(collectionId, collectedNum)
    return nextMilestone
  }
}