const FfbMarketEnchantTrades = {
  // config
  _maxLevelPaymentNum: 32,
  _iconId: 'minecraft:enchanted_book',
  categoryId: 'enchantments',
  categoryName: 'Enchantment Store',
  exportEnchantTrades () {
    FfbMarketFileHelper.writeMarketFile(this.categoryId, this.enchantMarketObj)
  },
  get enchantMarketObj () {
    let categoryObj = {}
    categoryObj[this.categoryId] = FfbMarketTrades.categoryEntry(
      FfbMarketTransHelper.marketCategoryTransKey(this.categoryId),
      this._iconId
    )
    let trades = []
    let allEnchants = EnchantHelper.allEnchants
    for (let enchantId in allEnchants) {
      let maxLevel = allEnchants[enchantId]
      let curLevel = maxLevel
      let curPayment = this._maxLevelPaymentNum
      while (curLevel > 1) {
        trades.push(
          FfbMarketTrades.enchantmentTradeEntry(
            enchantId,
            curLevel,
            curPayment,
            this.categoryId
          )
        )
        curLevel --
        curPayment /= 2
      }
      trades.push(
        FfbMarketTrades.enchantmentTradeEntry(
          enchantId,
          curLevel,
          curPayment,
          this.categoryId
        )
      )
    }
    return FfbMarketTrades.marketOverrideObj(
      categoryObj,
      trades
    )
  }
}