const CollectCaches = {
  get categoryLists () {
    return this._getAndReturnCache(
      'categoryLists',
      () => CollectListHelper.byCategory
    )
  },
  get categoryNames () {
    return this._getAndReturnCache(
      'categoryNames',
      () => CollectListHelper.categoryNames
    )
  },
  isNumberAMilestoneForCategory(number, categoryId) {
    return Object.keys(
      this._rewardsByMilestonesForCategory(categoryId)
    ).includes(number)
  },
  rewardForCategoryMilestone (milestoneNumber, categoryId) {
    return this._rewardsByMilestonesForCategory(categoryId)[milestoneNumber]
  },
  _rewardsByMilestonesForCategory(categoryId) {
    return this._getAndReturnCache(
      `_rewardsByMilestonesForCategory_${categoryId}`,
      () => CollectMilestones._rewardsByMilestonesForCategory(categoryId)
    )
  },
  _getAndReturnCache(key, callBackFunc) {
    if (!this.caches[key]) {
      this.caches[key] = callBackFunc()
      
    }
    return this.caches[key]
  },
  _caches: {}
}