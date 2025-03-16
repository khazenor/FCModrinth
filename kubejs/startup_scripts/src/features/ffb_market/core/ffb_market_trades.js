const FfbMarketTrades = {
  categoryEntry (nameTransKey, iconId) {
    return {
      name: nameTransKey,
      icon: {
        item: iconId
      }
    }
  },
  simpleTradeEntry (simpleTradeObj, categoryId, nbtObj) {
    let entry = {
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
    if (nbtObj) {
      entry.output.nbt = nbtObj
    }
    return entry
  },
  enchantmentTradeEntry (enchantId, level, paymentNum, categoryId) {
    let simpleTradeObj = {
      products: ['minecraft:enchanted_book'],
      paymentNum: paymentNum
    }
    let tradeObj = TradeReader.tradesFromSimplifiedDefinition(simpleTradeObj)[0]
    let nbtObj = {
      StoredEnchantments: [
        {
          id: enchantId,
          lvl: level
        }
      ],
      RepairCost: 0,
      display: {
        Name: StrHelper.objToMinecraftStr([
          { translate: EnchantHelper.transKeyFromEnchantId(enchantId) },
          { text: ` ${StrHelper.cleanFloor(level)}` }
        ])
      }
    }
    return this.simpleTradeEntry(tradeObj, categoryId, nbtObj)
  },
  marketOverrideObj (categories, entries) {
    return {
      customCategories: categories,
      customEntries: entries
    }
  }
}