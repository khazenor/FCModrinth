// priority: -1

const getItemRightClickEvents = () => {
  let eventsObj = {}
  eventsObj[global.ServerConsts.ticketId] = (event) => {
    global.MilesTicketEventMethods.bundleMilesTickets(event)
  }
  eventsObj[global.ServerConsts.bookletId] = (event) => {
    global.MilesTicketEventMethods.unBundleMilesBooklet(event)
  }
  return eventsObj
}

ItemEvents.rightClicked(event => {
  let itemId = event.item.id
  let itemRightClickEvents = getItemRightClickEvents()
  if (itemId in itemRightClickEvents) {
    itemRightClickEvents[itemId](event)
  }
})