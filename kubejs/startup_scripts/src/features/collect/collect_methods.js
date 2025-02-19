const CollectMethods = {
  checkAndLogCollectible: (event) => {
    let collectibleId = InventoryChangedHelper.item(event).id
    if (CollectHelper.isIdNewCollectible(event, collectibleId)) {
      CollectLogger.logCollectible(event, collectibleId)
    }
  },
  debugClearPlayerCollection: (event) => {
    if (EventGetters.isPlayerShifting(event)) {
        CollectLogger.clearCollectibles(event)
        EventMethods.tellPlayer(event, Text.translate('item.kubejs.debug_clear_player_collection.message'))
    }
  }
}