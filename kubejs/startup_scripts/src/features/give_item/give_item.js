const GiveItem = {
  giveItemsSmart (event, itemId, count) {
    let numSlotsNeeded = Math.ceil(count / ItemHelpers.stackSize(itemId))
    let emptySlotsAvailable = EventHelpers.numSlotsLeftOverInPlayer(event)
    if (emptySlotsAvailable >= numSlotsNeeded) {
      EventHelpers.givePlayerItemStack(event, itemId, count)
    } else {
      GiveItemLogger.putItemStack(event, itemId, count)
      EventHelpers.tellPlayer(event, Text.translate('giveItem.message.itemStored', 
        TransHelper.itemName(itemId),
        StrHelper.cleanFloor(count)
      ))
      console.log(GiveItemLogger.getAllItemStacks(event))
    }
  }
}