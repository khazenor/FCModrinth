const getItemRightClickEvents = () => {
  let eventsObj = {}
  eventsObj[global.Const.ticketId] = (event) => {
    global.MilesTicketEventMethods.bundleMilesTickets(event)
  }
  eventsObj[global.Const.bookletId] = (event) => {
    global.MilesTicketEventMethods.unBundleMilesBooklet(event)
  }
  return eventsObj
}
