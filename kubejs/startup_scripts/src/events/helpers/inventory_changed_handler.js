const inventoryChangedHandler = (event) => {
  let itemId = InventoryChangedHelper.item(event).id
  if (itemId === 'minecraft:stick') {
    CollectLogger.clearCollectibles(event)
  } else {
    CollectMethods.checkAndLogCollectible(event)
  }
  EventMethods.tellPlayer(event, `collection: ${CollectLogger.playerCollection(event)}`)
}