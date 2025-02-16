// priority: -1

const getItemRightClickEvents = () => {
  let eventsObj = {}
  eventsObj[ServerConsts.ticketId] = (event) => {
    MilesTicketEventMethods.bundleMilesTickets(event)
  }
  eventsObj[ServerConsts.bookletId] = (event) => {
    MilesTicketEventMethods.unBundleMilesBooklet(event)
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