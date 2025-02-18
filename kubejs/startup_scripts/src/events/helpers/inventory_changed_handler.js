const inventoryChangedHandler = (event) => {
  let itemId = InventoryChangedHelper.item(event).id
  let testKey = 'testKey'
  if (itemId === 'minecraft:stick') {
    PlayerDataHelper.clearKey(event, testKey)
    EventMethods.tellPlayer(event, `testList: ${PlayerDataHelper.getPlayerList(event, testKey)}`)
  } else {
    PlayerDataHelper.addToPlayerList(event, testKey, itemId)
    EventMethods.tellPlayer(event, `testList: ${PlayerDataHelper.getPlayerList(event, testKey)}`)
  }
}