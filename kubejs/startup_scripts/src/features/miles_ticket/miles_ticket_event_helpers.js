const MilesTicketEventMethods = {
  bundleMilesTickets: (event) => {
    if (EventGetters.isPlayerShifting(event)) {
      let numToBundle = MilesTicketConsts.numTicketsToBundle
      while (EventGetters.numItemsInPlayer(event, Const.ticketId) >= numToBundle) {
        EventMethods.removeItemsInPlayer(
          event,
          Const.ticketId,
          numToBundle
        )
        EventMethods.givePlayerItemStack(
          event,
          Const.bookletId,
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
        Const.ticketId,
        MilesTicketConsts.numTicketsToBundle
      )
    }
  }
}