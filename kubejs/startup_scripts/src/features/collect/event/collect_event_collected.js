const CollectEventCollected = {
  handleFirstCollectible (event) {
    EventHelpers.tellPlayer(event, '')
    if (CollectPlayerProgress.hasJustCollectedFirstCollectible(event)) {
      for (let i of [1,2,3]) {
        EventHelpers.tellPlayer(event,
          Text.translate(`collect.event.first.${i}`)
        )
      }
      GiveItem.giveItemsSmart(event, CollectGuiConst.id.mainMenu, 1)
    }
  }
}