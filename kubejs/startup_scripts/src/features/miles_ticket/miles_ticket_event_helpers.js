const MilesTicketEventMethods = {
  bundleMilesTickets: (event) => {
    if (EventGetters.isPlayerShifting(event)) {
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
  },
  unBundleMilesBooklet: (event) => {
    if (EventGetters.isPlayerShifting(event)) {
      EventGetters.mainHandItem(event).count --
      EventMethods.givePlayerItemStack(
        event,
        ServerConsts.ticketId,
        MilesTicketConsts.numTicketsToBundle
      )
    }
  }
}