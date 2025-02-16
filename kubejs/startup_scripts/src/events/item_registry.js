// priority: -1
StartupEvents.registry('item', event => {
  for (let customItem of customItems) {
    event.create(`kubejs:${customItem}`)
  }
})