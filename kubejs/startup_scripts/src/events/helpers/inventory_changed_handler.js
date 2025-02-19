const inventoryChangedHandler = (event) => {
  CollectMethods.checkAndLogCollectible(event)

  // todo remove testing code
  if (CollectListHelper.isACollectible(InventoryChangedHelper.item(event).id)) {
    EventMethods.tellPlayer(event, CollectLogger.playerCollection(event))
  }
}