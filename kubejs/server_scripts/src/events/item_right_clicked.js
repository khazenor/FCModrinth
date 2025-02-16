// priority: -1

const itemRightClickEvents = {
  "kubejs:miles_ticket": (event) => milesTicketRightClicked(event)
}

ItemEvents.rightClicked(event => {
  let itemId = event.item.id
  if (itemId in itemRightClickEvents) {
    itemRightClickEvents[itemId](event)
  }
})