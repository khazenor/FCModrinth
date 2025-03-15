const FfbMarketSimpleTrades = {
  exportSimpleMarket () {
    this._writeTranslations()
    IoHelper.writeObj(
      'kubejs/data/farmingforblockheads/farmingforblockheads_compat/simple_trades.json',
      this._simpleMarketObject
    )
  },
  get _simpleMarketObject () {
    let categories = {}
    let trades = []
    for (let categoryId in FfbMarketConfigSimpleTrades) {
      categories[categoryId] = FfbMarketTrades.categoryEntry(
        this._marketCategoryTransKey(categoryId),
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
  },
  _writeTranslations() {
    for (let categoryId in FfbMarketConfigSimpleTrades) {
      EnUsHelper.addTrans(
        this._marketCategoryTransKey(categoryId),
        FfbMarketConfigSimpleTrades[categoryId].name
      )
    }
  },
  _marketCategoryTransKey(categoryId) {
    return `ffbMarket.category.${categoryId}`
  }
}