const CollectTooltips = {
  addTooltips (event) {
    for (let categoryId in CollectLists) {
      let collectList = CollectCaches.categoryLists[categoryId]
      console.log(categoryId)
      if (categoryId === CollectConst.entityCollectionId) {
        collectList = CollectEntity.listToSpawnEggs(collectList)
        console.log(collectList)
      } 

      EventMethods.add(
        event,
        collectList,
        [CollectTransHelper.categoryName(categoryId)]
      )
    }

    for (let subCategoryId of CollectCaches.subCategoryIds) {
      let collectList = CollectCaches.categoryLists[subCategoryId]
      if (CollectListHelper.collectionIdFromSubCollectionId(
        subCategoryId
      ) === CollectConst.entityCollectionId) {
        collectList = CollectEntity.listToSpawnEggs(collectList)
      }
      EventMethods.add(
        event,
        collectList,
        [CollectTransHelper.categoryName(subCategoryId)]
      )
    }
  }
}