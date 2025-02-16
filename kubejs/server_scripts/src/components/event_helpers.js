const EventGetters = {
  player: (event) => {
    return event.player
  },
  isPlayerShifting: (event) => {
    return event.player.shiftKeyDown
  },
  mainHandItem: (event) => {
    return event.player.mainHandItem
  },
  numItemsInPlayer: (event, itemId) => {
    let count = 0
    for (let itemStack of event.player.inventory.allItems) {
      if (itemStack.id === itemId) {
        count += itemStack.count
      }
    }
    return count
  }
}

const EventMethods = {
  tellPlayer: (event, msg) => {
    EventGetters.player(event).tell(msg)
  },
  givePlayerItemStack: (event, itemId, count) => {
    let itemObj = Item.of(itemId)
    itemObj.count = count
    EventGetters.player(event).give(itemObj)
  }
}