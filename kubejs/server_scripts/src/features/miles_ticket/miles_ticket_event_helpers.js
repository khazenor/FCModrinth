const MilesTicketEventMethods = {
  bundleMilesTickets: (event) => {
    let numToBundle = MilesTicketConsts.numTicketsToBundle
    while (EventGetters.numItemsInPlayer(event, ServerConsts.ticketId) >= numToBundle) {
      EventMethods.removeItemsInPlayer(
        event,
        ServerConsts.ticketId,
        numToBundle
      )
      EventMethods.givePlayerItemStack(
        event,
        ServerConsts.bookletId,
        1
      )
    }
  }
}