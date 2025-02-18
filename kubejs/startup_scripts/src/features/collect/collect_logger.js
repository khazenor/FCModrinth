const CollectLogger = {
  playerCollection (event) {
    return PlayerDataHelper.getPlayerList(
      event,
      CollectConst.playerCollectedDataKey
    )
  },
  logCollectible (event, collectibleId) {
    PlayerDataHelper.addToPlayerList(
      event,
      CollectConst.playerCollectedDataKey,
      collectibleId
    )
  },
  clearCollectibles (event) {
    PlayerDataHelper.clearKey(
      event,
      CollectConst.playerCollectedDataKey
    )
  }
}