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
  rewardsByMilestonesForCategory(categoryId) {
    return this._getAndReturnCache(
      `_rewardsByMilestonesForCategory_${categoryId}`,
      () => CollectMilestones.rewardsByMilestonesForCategory(categoryId)
    )
  },
  _getAndReturnCache(key, callBackFunc) {
    if (!this._caches[key]) {
      this._caches[key] = callBackFunc()
    }
    return this._caches[key]
  },
  _caches: {}
}