// priority: -1
const TradeReaderConfig = {
  defaultPayment: MilesTicketConsts.ticketId,
  defaultPaymentMaxNum: ItemHelpers.stackSize(this.defaultPayment),
  defaultPaymentBundlingNum: MilesTicketConsts.numTicketsToBundle,
  defaultPaymentBundle: MilesTicketConsts.bookletId,
  defaultPaymentNum: 1,
  defaultProductNum: 1
}