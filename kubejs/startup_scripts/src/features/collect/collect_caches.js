const CollectCaches = {
  serverLoadedCaching () {
    this.categoryLists = CollectListHelper.byCategory
    this.categoryNames = CollectListHelper.categoryNames
  },
  get categoryLists () {
    return this.getAndReturnCache(
      'categoryLists',
      () => CollectListHelper.byCategory
    )
  },
  get categoryNames () {
    return this.getAndReturnCache(
      'categoryNames',
      () => CollectListHelper.categoryNames
    )
  },
  getAndReturnCache(key, callBackFunc) {
    if (!this.caches[key]) {
      this.caches[key] = callBackFunc()
      
    }
    return this.caches[key]
  },
  caches: {}
}