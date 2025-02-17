ItemEvents.rightClicked(event => {
  let itemId = event.item.id
  let itemRightClickEvents = global.getItemRightClickEvents()
  if (itemId in itemRightClickEvents) {
    itemRightClickEvents[itemId](event)
  }
})