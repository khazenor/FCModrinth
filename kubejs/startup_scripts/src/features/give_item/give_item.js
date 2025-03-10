const GiveItem = {
  giveItemsSmart (event, itemId, count) {
    let numItemsPlayerCanReceive = GiveItemHelper.numItemsPlayerCanReceive(
      event, itemId, count
    )
    let numLeftOver
    if (numItemsPlayerCanReceive > 0) {
      EventHelpers.givePlayerItemStack(event, itemId, numItemsPlayerCanReceive)
      numLeftOver = count - numItemsPlayerCanReceive
    } else {
      numLeftOver = count
    }
    if (numLeftOver > 0) {
      GiveItemLogger.putItemStack(event, itemId, numLeftOver)
      EventHelpers.tellPlayer(event, Text.translate('giveItem.message.itemStored', 
        TransHelper.itemName(itemId),
        StrHelper.cleanFloor(numLeftOver)
      ))
      console.log(GiveItemLogger.getAllItemStacks(event))
    }
  }
  // giveItemsIfThereIsSpace()
}