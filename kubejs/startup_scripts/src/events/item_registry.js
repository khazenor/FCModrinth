// priority: -1
StartupEvents.registry('item', event => {
  for (let customItem of MilesTicketCustomItems) {
    event.create(`kubejs:${customItem}`)
  }
})