const playerLoggedInHandler = (event) => {
  CollectListHelper.cachePlayerCollectionProgress(event)
  FcLogger.log('PlayerLoggedInCollectionCache')
  console.log(CollectCache)
}