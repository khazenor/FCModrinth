const MilesTicketEventMethods = {
  bundleMilesTickets: (event) => {
    if (EventGetters.isPlayerShifting(event)) {
      let numToBundle = MilesTicketConsts.numTicketsToBundle
      while (EventGetters.numItemsInPlayer(event, MilesTicketConsts.ticketId) >= numToBundle) {
        EventMethods.removeItemsInPlayer(
          event,
          MilesTicketConsts.ticketId,
          numToBundle
        )
        EventMethods.givePlayerItemStack(
          event,
          MilesTicketConsts.bookletId,
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
        MilesTicketConsts.ticketId,
        MilesTicketConsts.numTicketsToBundle
      )
    }
  }
}