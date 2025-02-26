const CollectMilestoneMethods = {
  isNumberAMilestoneForCategory(number, categoryId) {
    return Object.keys(
      CollectCaches.rewardsByMilestonesForCategory(categoryId)
    ).includes(number)
  },
  rewardForCategoryMilestone (milestoneNumber, categoryId) {
    return CollectCaches.rewardsByMilestonesForCategory(categoryId)[milestoneNumber]
  },
  nextMilestoneForCollection (collectionId, number) {
    for (let milestone of CollectCaches.milestonesForCollection(collectionId)) {
      if (milestone > number) {
        return milestone
      }
    }
    return null
  },
  isMilestoneForCollection (collectionId, number) {
    return CollectCaches.milestonesForCollection(collectionId).includes(number)
  }
}