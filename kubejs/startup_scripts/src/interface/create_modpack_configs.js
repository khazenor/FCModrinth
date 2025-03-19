const createModpackConfigs = () => {
  CollectListHelper.writeAllTranslations()

  FfbMarketTransHelper.exportFfbMarketTrans()
  FfbMarketSimpleTrades.exportSimpleMarket()
  FfbMarketEnchantTrades.exportEnchantTrades()
}