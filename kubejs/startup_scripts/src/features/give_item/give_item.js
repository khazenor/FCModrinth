const GiveItem = {
  giveItemsSmart (event, itemId, count) {
    let numSlotsNeeded = Math.ceil(count / ItemHelpers.stackSize(itemId))
    let emptySlotsAvailable = EventHelpers.numSlotsLeftOverInPlayer(event)
    if (emptySlotsAvailable >= numSlotsNeeded) {
      EventHelpers.givePlayerItemStack(event, itemId, count)
    } else {
      // todo log items not received
      EventHelpers.tellPlayer(event, 'item not received')
    }
  }
}