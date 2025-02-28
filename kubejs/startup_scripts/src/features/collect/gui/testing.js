const testGui = (event) => {
  ChestGui.openChestGui(event, "testing", 6, gui => {
    ChestGui.slotGui(gui, 4, 1, 
      ChestGui.namedClickableSlotCallback(
        'Hello!',
        'minecraft:diamond',
        () => EventMethods.tellPlayer(event, 'testing diamond')
      )
    )
  })
}