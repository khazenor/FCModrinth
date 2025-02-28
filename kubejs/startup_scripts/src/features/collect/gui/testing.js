const testGui = (event) => {
  ChestGui.openChestGui(event, "testing", 6, gui => {
    ChestGui.slotGui(gui, 4, 1, 
      ChestGui.namedClickableSlotCallback(
        'Hello!',
        'minecraft:diamond',
        () => ChestGui.openChestGui(event, 'new page!', 6, gui => {
          ChestGui.slotGui(gui, 4, 1,
            ChestGui.simpleSlotCallback('minecraft:stick')
          )
        })
      )
    )
  })
}