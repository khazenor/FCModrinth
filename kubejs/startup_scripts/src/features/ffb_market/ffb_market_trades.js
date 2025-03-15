const FfbMarketTrades = {
  categoryEntry (nameTransKey, iconId) {
    return {
      name: nameTransKey,
      icon: {
        item: iconId
      }
    }
  },
  simpleTradeEntry (simpleTradeObj, categoryId) {
    return {
      output: {
        item: simpleTradeObj.product,
        count: simpleTradeObj.productNum
      },
      payment: {
        item: simpleTradeObj.payment,
        count: simpleTradeObj.paymentNum
      },
      category: categoryId
    }
  },
  marketOverrideObj (categories, entries) {
    return {
      customCategories: categories,
      customEntries: entries
    }
  }
}