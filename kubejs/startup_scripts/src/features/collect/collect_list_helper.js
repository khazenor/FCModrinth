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
    return []
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
    return []
  },
  cacheCollectionLengths () {
    for (let collectionId in CollectLists) {
      let collection = CollectLists[collectionId]
      let subCollections = collection.subCollections
      let collectionLength = 0
      
      for (let subCollectionId in subCollections) {
        let subCollection = subCollections[subCollectionId]
        let subCollectionLength = subCollection.list.length
        CollectCache.lengths[subCollectionId] = subCollectionLength
        collectionLength += subCollectionLength
      }
      CollectCache.lengths[collectionId] = collectionLength
    }
  },
  cachePlayerCollectionProgress (event) {
    let playerCollection = CollectLogger.playerCollection(event)
    let playerCache = {}
    for (let collectionId in CollectLists) {
      let collection = CollectLists[collectionId]
      let subCollections = collection.subCollections
      let collectionProgress = 0
      
      for (let subCollectionId in subCollections) {
        let subCollectionIds = subCollections[subCollectionId].list
        let subCollectionProgress = 0

        for (let playerCollectId of playerCollection) {
          if (subCollectionIds.includes(playerCollectId)) {
            subCollectionProgress ++
            collectionProgress ++
          }
        }
        playerCache[subCollectionId] = subCollectionProgress
      }
      playerCache[collectionId] = collectionProgress
    }
    CollectCache.playerProgress[EventGetters.playerUuid(event)] = playerCache
  }
}