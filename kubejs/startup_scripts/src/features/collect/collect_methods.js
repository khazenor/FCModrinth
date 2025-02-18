const CollectMethods = {
  checkAndLogCollectible: (event) => {
    let collectibleId = InventoryChangedHelper.item(event).id
    if (CollectHelper.isIdNewCollectible(event, collectibleId)) {
      CollectLogger.logCollectible(event, collectibleId)
    }
  }
}