const CollectCaches = {
  serverLoadedCaching () {
    this.categoryLists = CollectListHelper.byCategory
    this.categoryNames = CollectListHelper.categoryNames
  },
  categoryLists: null,
  categoryNames: null
}