const FfbMarketTransHelper = {
  exportFfbMarketTrans() {
    this.writeSimpleTradesTrans()
    this.writeEnchantTradesTrans()
  },
  writeSimpleTradesTrans() {
    for (let categoryId in FfbMarketConfigSimpleTrades) {
      EnUsHelper.addTrans(
        this.marketCategoryTransKey(categoryId),
        FfbMarketConfigSimpleTrades[categoryId].name
      )
    }
  },
  writeEnchantTradesTrans() {
    EnUsHelper.addTrans(
      this.marketCategoryTransKey(
        FfbMarketEnchantTrades.categoryId
      ),
      FfbMarketEnchantTrades.categoryName
    )
  },
  marketCategoryTransKey(categoryId) {
    return `ffbMarket.category.${categoryId}`
  }
}