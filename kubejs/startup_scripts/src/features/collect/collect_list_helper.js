const CollectListHelper = {
  get allCollectibleIds() {
    let collectibleIds = []
    for (let collectionId in CollectLists) {
      let collection = CollectLists[collectionId]
      let subCollections = collection.subCollections
      for (let subCollectionId in subCollections) {
        let subCollection = subCollections[subCollectionId]
        collectibleIds = collectibleIds.concat(subCollection.list)
      }
    }
    return collectibleIds
  }
}