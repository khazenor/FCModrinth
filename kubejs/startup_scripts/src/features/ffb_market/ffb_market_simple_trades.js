const FfbMarketSimpleTrades = {
  exportSimpleMarket () {
    FfbMarketFileHelper.writeMarketFile('simple_trades', this._simpleMarketObject)
  },
  get _simpleMarketObject () {
    let categories = {}
    let trades = []
    for (let categoryId in FfbMarketConfigSimpleTrades) {
      categories[categoryId] = FfbMarketTrades.categoryEntry(
        FfbMarketTransHelper.marketCategoryTransKey(categoryId),
        FfbMarketConfigSimpleTrades[categoryId].icon
      )

      let simpleTrades = TradeReader.tradesFromSimplifiedList(
        FfbMarketConfigSimpleTrades[categoryId].simpleTrades
      )

      for (let simpleTrade of simpleTrades) {
        trades.push(FfbMarketTrades.simpleTradeEntry(
          simpleTrade, categoryId
        ))
      }
    }
    return FfbMarketTrades.marketOverrideObj(
      categories,
      trades
    )
  }
}