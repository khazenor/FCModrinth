const PlayerDataHelper = {
  addToPlayerList (event, key, val) {
    let playerDataList = EventGetters.playerData(event)[key]
    if (playerDataList) {
      let jsList = ArrayHelper.toJsArray(playerDataList)
      jsList.push(val)
      EventGetters.playerData(event)[key] = jsList
    } else {
      EventGetters.playerData(event)[key] = [val]
    }
  },
  getPlayerList (event, key) {
    if (EventGetters.playerData(event)[key]) {
      return ArrayHelper.toJsArray(
        EventGetters.playerData(event)[key]
      )
    } else {
      return []
    }
  },
  clearKey (event, key) {
    delete EventGetters.playerData(event)[key]
  }
}