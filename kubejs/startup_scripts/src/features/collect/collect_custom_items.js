const CollectCustomItems = {
  get itemIds () {
    let ids = []
    ids = ids.concat(
      this._hardCodedIds,
      this._certificates
    )
    return ids
  },
  get _hardCodedIds () {
    return [
      CollectConst.clearCollectionId
    ]
  },
  get _certificates () {
    let ids = []
    for (let categoryId of CollectListHelper.collectionIds) {
      ids.push(CollectTransHelper.certificateId(categoryId))
    }
    return ids
  }
}