const CollectHelper = {
  isIdNewCollectible (event, id) {
    if (CollectListHelper.allCollectibleIds.includes(id)) {
      let playerCollection = CollectLogger.playerCollection(event)
      if (!playerCollection.includes(id)) {
        return true
      }
    }
    return false
  }
}