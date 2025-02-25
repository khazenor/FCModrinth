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
  _getAndReturnCache(key, callBackFunc) {
    if (!this.caches[key]) {
      this.caches[key] = callBackFunc()
      
    }
    return this.caches[key]
  },
  _caches: {}
}