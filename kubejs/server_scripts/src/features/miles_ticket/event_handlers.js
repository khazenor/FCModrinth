const milesTicketEventHandlers = {
  rightClicked: {
    milesTicket: (event) => {
      EventMethods.givePlayerItemStack(event, ServerConsts.ticketId, 1)
    } 
  }
}