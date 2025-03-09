const GiveItemLogger = {
  putItemStack (event, itemId, count) {
    PlayerDataHelper.addToPlayerCountObj(
      event,
      GiveItemConst.loggerKey,
      itemId,
      count
    )
  },
  getItemStack (event) {
    let countObj = PlayerDataHelper.getPlayerCountObj(event, GiveItemConst.loggerKey)
    let keys = Object.keys(countObj)
    if (keys.length > 0) {
      let itemId = keys[0]
      let itemStack = {}
      itemStack[itemId] = countObj[itemId]
      delete countObj[itemId]
      PlayerDataHelper.setPlayerData(event, GiveItemConst.loggerKey, countObj)
      return itemStack
    } else {
      return null
    }
  },
  getAllItemStacks (event) {
    return PlayerDataHelper.getPlayerCountObj(event, GiveItemConst.loggerKey)
  }
}