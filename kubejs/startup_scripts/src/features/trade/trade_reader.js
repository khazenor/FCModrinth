const TradeReader = {
  tradesFromSimplifiedList (simplifiedList, allowMultiplePaymentTypes) {
    let trades = []
    for (let simplifiedTrade of simplifiedList) {
      trades = trades.concat(
        this.tradesFromSimplifiedDefinition(simplifiedTrade, allowMultiplePaymentTypes)
      )
    }
    return trades
  },
  tradesFromSimplifiedDefinition (simplifiedTrade, allowMultiplePaymentTypes) {
    let defaultPayment = defOverride(simplifiedTrade, 'payment', TradeReaderConfig.defaultPayment)
    let payment = defaultPayment
    let paymentNum = defOverride(simplifiedTrade, 'paymentNum',
      TradeReaderConfig.defaultPaymentNum
    )
    let payment2
    let payment2Num
    let trades = []
    if (paymentNum > TradeReaderConfig.defaultPaymentMaxNum) {
      let numPerBundle = TradeReaderConfig.defaultPaymentBundlingNum
      let paymentBundle = TradeReaderConfig.defaultPaymentBundle
      if (allowMultiplePaymentTypes) {
        let numBundle = Math.floor(paymentNum / numPerBundle)
        payment2 = defaultPayment
        payment2Num = paymentNum % numPerBundle
        payment = paymentBundle
        paymentNum = numBundle
      } else {
        let numBundleRounded = Math.floor(paymentNum / numPerBundle + .5)
        payment = paymentBundle
        paymentNum = numBundleRounded
      }
    }
    for (let product of simplifiedTrade.products) {
      let productNum = defOverride(simplifiedTrade, 'productNum',
        TradeReaderConfig.defaultProductNum
      )
      let trade = {
        product: product,
        productNum: productNum,
        payment: payment,
        paymentNum: paymentNum
      }
      if (payment2) {
        trade['payment2'] = payment2
        trade['payment2Num'] = payment2Num
      }
      trades.push(trade)
    }
    return trades
  }
}