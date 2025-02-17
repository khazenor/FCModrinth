// priority: -1
StartupEvents.registry('item', event => {
  let itemIds = [].concat(MilesTicketCustomItems)
  for (let itemId of itemIds) {
    event.create(itemId)
  }
})