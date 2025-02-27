const CollectTooltips = {
  addTooltips (event) {
    for (let categoryId in CollectLists) {
      EventMethods.add(
        event,
        CollectCaches.categoryLists[categoryId],
        [CollectTransHelper.categoryName(categoryId)]
      )
    }

    for (let subCategoryId of CollectCaches.subCategoryIds) {
      EventMethods.add(
        event,
        CollectCaches.categoryLists[subCategoryId],
        [CollectTransHelper.categoryName(subCategoryId)]
      )
    }
  }
}