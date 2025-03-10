const GiveItemHelper = {
  numItemsPlayerCanReceive (event, itemId, count) {
    let stackSize = ItemHelpers.stackSize(itemId)
    let numSlotsNeeded = Math.ceil(count / stackSize)
    let emptySlotsAvailable = EventHelpers.numSlotsLeftOverInPlayer(event)
    if (emptySlotsAvailable >= numSlotsNeeded) {
      return count
    }
    let numItems = 0
    if (emptySlotsAvailable > 0) {
      numItems += emptySlotsAvailable * stackSize
    }
    let incompleteStackAmt = EventHelpers.numItemsInPlayer(event, itemId) % stackSize
    if (incompleteStackAmt > 0) {
      numItems += incompleteStackAmt
    }
    return numItems
  }
}