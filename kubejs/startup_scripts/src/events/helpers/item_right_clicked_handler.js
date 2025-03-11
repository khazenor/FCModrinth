const itemRightClickedHandler = (event) => {
  let itemId = event.item.id

  switch (itemId) {
    case MilesTicketConsts.ticketId:
      FcLogger.log('bundling miles tickets')
      MilesTicketEventMethods.bundleMilesTickets(event)
      break
    case MilesTicketConsts.bookletId:
      FcLogger.log('unbundling miles booklet')
      MilesTicketEventMethods.unBundleMilesBooklet(event)
      break
    case CollectConst.clearCollectionId:
      FcLogger.log('clear player collection')
      CollectMethods.debugClearPlayerCollection(event)
      break
    case CollectGuiConst.id.mainMenu:
      CollectGuiMainMenu.openMainMenu(event)
      break
    case 'minecraft:stick':
      // GiveItem.giveItemsSmart(event, MilesTicketConsts.ticketId, 64 + 32)
      // GiveItem.giveAvailableItems(event)
      let en_us = JsonIO.read('kubejs/assets/kubejs/lang/en_us.json')
      console.log(en_us)
      JsonIO.write('kubejs/assets/kubejs/lang/en_us.json', en_us)
      break
  }
}