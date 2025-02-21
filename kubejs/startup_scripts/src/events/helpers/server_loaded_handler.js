const serverLoadedHandler = (_event) => {
  CollectListHelper.cacheCollectionInfo()
  FcLogger.log('ServerLoadedCollectionCache')
  console.log(CollectCache)
}