const CollectGuiSubMenus = {
  openSubMenuForCategory (event, categoryId) {
    let menuTitle = Text.translate(
      'collect.gui.menu.milestoneTitle',
      StrHelper.cleanFloor(CollectPlayerProgress.numUntilNextMilestone(
        event, categoryId
      )),
      StrHelper.cleanFloor(CollectPlayerProgress.nextMilestoneReward(
        event, categoryId
      ))
    )
    let mainMenuLabel = Text.translate('menu.backToMainMenu')
    let mainMenuCallback = () => CollectGuiMainMenu.openMainMenu(event)
    let subMenu = new MenuWrapper(menuTitle, { colStart: 1 }, mainMenuLabel, mainMenuCallback)
    let subCollectionIdsByCollectionId = CollectCaches.subCollectionIdsByCollectionId
    let subCollectionIds = subCollectionIdsByCollectionId[categoryId]
    
    for (let subCollectionId of subCollectionIds) {
      let collectedIds = CollectLogger.playerCollectionByCategory(event, subCollectionId)
      let subCollectionItemIds = CollectCaches.categoryLists[subCollectionId]
      let itemIds = ArrayHelper.arrayDiff(subCollectionItemIds, collectedIds)
      let subCollectTitle = Text.translate(
        'collect.gui.menu.subCatFormat',
        StrHelper.cleanFloor(
          CollectRewards.subCollectionCompletionReward(subCollectionId)
        ),
        CollectTransHelper.categoryName(subCollectionId)
      )
      if (itemIds.length > 0) {
        subMenu.addSlot({
          label: subCollectTitle,
          item: "minecraft:nether_star"
        }, { "col": 0 })
        for (let itemId of itemIds) {
          let itemIcon
          let label
          if (CollectEntity.isEntityCollection(categoryId)) {
            itemIcon = CollectEntity.spawnEggFromEntityType(itemId)
            label = TransHelper.entityName(itemId)
          } else {
            itemIcon = itemId
            label = TransHelper.itemName(itemId)
          }
          subMenu.addSlot({
            label: label,
            item: itemIcon
          })
        }
        subMenu.nextRow()
      }
    }

    subMenu.menu.show(event.player)
  }
}