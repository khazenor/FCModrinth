const CollectGuiMainMenu = {
  openMainMenu (event) {
    let mainMenu = new MenuWrapper(Text.translate('collect.gui.name.mainMenu'))

    for (let collectionId in CollectLists) {
      CollectGuiMainMenu_AddMenu(event, mainMenu, collectionId)
    }

    mainMenu.menu.show(event.player)
  }
}

const CollectGuiMainMenu_AddMenu = (event, menu, collectionId) => {
  let categoryLabel = Text.translate(
    'collect.gui.menu.categoryNameWithMilestoneReward',
    CollectTransHelper.categoryName(collectionId),
    StrHelper.cleanFloor(
      CollectPlayerProgress.numUntilNextMilestone(event, collectionId)
    ),
    StrHelper.cleanFloor(
      CollectPlayerProgress.nextMilestoneReward(event, collectionId)
    )
  )
  menu.addSlot({
    label: categoryLabel,
    item: CollectLists[collectionId].icon,
    onLeftClicked: (_clickedEvent) => {
      CollectGuiSubMenus.openSubMenuForCategory(event, collectionId)
    }
  })

}