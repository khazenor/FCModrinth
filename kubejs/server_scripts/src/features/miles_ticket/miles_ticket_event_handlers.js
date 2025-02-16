const MilesTicketEventHandlers = {
  rightClicked: {
    milesTicket: (event) => {
      if (EventGetters.isPlayerShifting(event)) {
        MilesTicketEventMethods.bundleMilesTickets(event)
      }
    } 
  }
}