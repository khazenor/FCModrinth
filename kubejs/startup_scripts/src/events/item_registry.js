// priority: -1
StartupEvents.registry('item', event => {
  let itemIds = [].concat(
    MilesTicketCustomItems,
    CollectCustomItems
  )
  for (let itemId of itemIds) {
    FcLogger.log(`Registering ${itemId}`)
    event.create(itemId)
  }
})

// test codes
CollectTestCodes.testMilestoneRewards()