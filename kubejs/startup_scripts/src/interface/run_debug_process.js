const runDebugProcess = () => {
  CollectListHelper.writeAllTranslations()

  FfbMarketTransHelper.exportFfbMarketTrans()
  FfbMarketSimpleTrades.exportSimpleMarket()
}