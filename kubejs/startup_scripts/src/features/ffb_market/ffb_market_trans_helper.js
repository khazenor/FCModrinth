const FfbMarketTransHelper = {
  exportFfbMarketTrans() {
    this.writeSimpleTradesTrans()
  },
  writeSimpleTradesTrans() {
    for (let categoryId in FfbMarketConfigSimpleTrades) {
      EnUsHelper.addTrans(
        this.marketCategoryTransKey(categoryId),
        FfbMarketConfigSimpleTrades[categoryId].name
      )
    }
  },
  marketCategoryTransKey(categoryId) {
    return `ffbMarket.category.${categoryId}`
  }
}