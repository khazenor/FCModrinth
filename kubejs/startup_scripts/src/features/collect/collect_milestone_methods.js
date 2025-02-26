const CollectMilestoneMethods = {
  isNumberAMilestoneForCategory(number, categoryId) {
    return Object.keys(
      CollectCaches.rewardsByMilestonesForCategory(categoryId)
    ).includes(number)
  },
  rewardForCategoryMilestone (milestoneNumber, categoryId) {
    return CollectCaches.rewardsByMilestonesForCategory(categoryId)[milestoneNumber]
  }
}