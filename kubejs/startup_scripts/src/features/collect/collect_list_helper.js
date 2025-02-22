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
  },
  get byCategory () {
    let byCategory = {}
    for (let collectionId in CollectLists) {
      let collectibleIds = []
      let collection = CollectLists[collectionId]
      let subCollections = collection.subCollections
      
      for (let subCollectionId in subCollections) {
        let subCollection = subCollections[subCollectionId]
        collectibleIds = collectibleIds.concat(subCollection.list)
        byCategory[subCollectionId] = subCollection.list
      }

      byCategory[collectionId] = collectibleIds
    }
    return byCategory
  },
  get categoryNames () {
    let categoryNames = {}
    for (let collectionId in CollectLists) {
      let collection = CollectLists[collectionId]
      let subCollections = collection.subCollections

      categoryNames[collectionId] = collection.name

      for (let subCollectionId in subCollections) {
        let subCollection = subCollections[subCollectionId]
        categoryNames[subCollectionId] = subCollection.name
      }
    }
    return categoryNames
  },
  collectedMessage (collectionId) {
    return CollectLists[collectionId].collectedMessage
  },
  isACollectible (objectId) {
    return this.allCollectibleIds.includes(objectId)
  },
  collectionIdOfCollectible (collectableId) {
    let byCollection = this.byCollection
    for (let collectionId in byCollection) {
      let collectionIds = byCollection[collectionId]
      if (collectionIds.includes(collectableId)) {
        return collectionId
      }
    }
    return null
  },
  subCollectionIdOfCollectible (collectableId) {
    for (let collectionId in CollectLists) {
      let collection = CollectLists[collectionId]
      let subCollections = collection.subCollections
      
      for (let subCollectionId in subCollections) {
        let subCollection = subCollections[subCollectionId]
        if (subCollection.list.includes(collectableId)) {
          return subCollectionId
        }
      }
    }
    return null
  },
  get allCategoryIds () {
    let categoryIds = []
    for (let collectionId in CollectLists) {
      categoryIds.push(collectionId)
      let collection = CollectLists[collectionId]
      let subCollections = collection.subCollections
      for (let subCollectionId in subCollections) {
        categoryIds.push(subCollectionId)
      }
    }
    return categoryIds
  }
}