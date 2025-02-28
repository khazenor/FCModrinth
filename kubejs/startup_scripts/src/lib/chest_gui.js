const ChestGui = {
  openChestGui (event, titleText, numRows, guiCallback) {
    event.player.openChestGUI(titleText, numRows, guiCallback)
  },
  slotGui (gui, col, row, slotCallback) {
    gui.slot(col, row, slotCallback)
  },
  simpleSlotCallback(itemId) {
    return slot => { slot.item = itemId }
  },
  namedClickableSlotCallback(nameText, itemId, eventCallback) {
    return slot => {
      slot.item = Item.of(itemId).withName(nameText)
      slot.leftClicked = e => {
        eventCallback()
      }
    }
  }
}