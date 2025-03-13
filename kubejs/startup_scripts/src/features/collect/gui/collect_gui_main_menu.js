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
  menu.addSlot({
    label:CollectTransHelper.categoryName(collectionId),
    item: CollectLists[collectionId].icon,
    onLeftClicked: (_clickedEvent) => {
      CollectGuiSubMenus.openSubMenuForCategory(event, collectionId)
    }
  })

}