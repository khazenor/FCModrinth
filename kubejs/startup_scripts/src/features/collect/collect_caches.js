const CollectCaches = {
  get categoryLists () {
    return this._getAndReturnCache(
      'categoryLists',
      () => CollectListHelper.byCategory
    )
  },
  rewardsByMilestonesForCategory(categoryId) {
    return this._getAndReturnCache(
      `_rewardsByMilestonesForCategory_${categoryId}`,
      () => CollectMilestones.rewardsByMilestonesForCategory(categoryId)
    )
  },
  milestonesForCollection(collectionId) {
    return this._getAndReturnCache(
      `_milestonesForCollection_${collectionId}`,
      () => CollectMilestones.milestonesForCollection(collectionId)
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