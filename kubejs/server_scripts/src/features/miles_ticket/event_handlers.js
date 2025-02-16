const milesTicketEventHandlers = {
  rightClicked: {
    milesTicket: (event) => {
      EventMethods.tellPlayer(event,
        EventGetters.numItemsInPlayer(event,
          ServerConsts.ticketId
        )
      )
    } 
  }
}