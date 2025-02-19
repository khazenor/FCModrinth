const CollectListHelper = {
  get allCollectibleIds() {
    let byCollection = this.byCollection
    let collectibleIds = []
    for (let collectionId in byCollection) {
      collectibleIds = collectibleIds.concat(byCollection[collectionId])
    }
    return collectibleIds
  },
  get byCollection () {
    let byCollection = {}
    for (let collectionId in CollectLists) {
      let collectibleIds = []
      let collection = CollectLists[collectionId]
      let subCollections = collection.subCollections
      
      for (let subCollectionId in subCollections) {
        let subCollection = subCollections[subCollectionId]
        collectibleIds = collectibleIds.concat(subCollection.list)
      }

      byCollection[collectionId] = collectibleIds
    }
    return byCollection
  }
}