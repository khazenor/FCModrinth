const EventGetters = {
  player: (event) => {
    return event.player
  },
  isPlayerShifting: (event) => {
    return event.player.shiftKeyDown
  },
  mainHandItem: (event) => {
    return event.player.mainHandItem
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