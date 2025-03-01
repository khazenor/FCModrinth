const testGui = (event) => {
}

const _testCodes = {
  showMenu () {
    ///////////////
    // Menu Data //
    ///////////////
    
    let ironMenu = new MenuType(Text.blue("Iron Menu"));
    ironMenu.addSlot({page: 0, x: 0, y: 0, label: "Unused", item: "minecraft:stone"});
    ironMenu.addSlot({page: 0, x: 4, y: 3, label: "Unused", item: "minecraft:stone"});
    ironMenu.addSlot({page: 0, x: 8, y: 0, label: "Unused", item: "minecraft:stone"});
    ironMenu.addSlot({page: 0, x: 4, y: 1, label: "The Eye", item: "minecraft:ender_eye",
      onLeftClicked: (player) => player.sendSystemMessage("Eye Left Clicked"),
      onRightClicked: (player) => player.sendSystemMessage("Eye Right Clicked")});
    ironMenu.addSlot({page: 1, x: 4, y: 0, label: "Unused", item: "minecraft:stone"});
    ironMenu.addSlot({page: 1, x: 2, y: 2, label: "Unused", item: "minecraft:stone"});
    ironMenu.addSlot({page: 1, x: 6, y: 2, label: "The Dirt", item: "minecraft:dirt",
      onThrown: (player) => player.sendSystemMessage("Dirt Thrown")});
    ironMenu.addSlot({page:2, x: 4, y: 2, label: "Explode", item: "minecraft:tnt",
      onLeftClicked: (player) => player.getLevel().createExplosion(player.x, player.y, player.z).explode()});
    
    let goldMenu = new MenuType(Text.red("Gold Menu"));
    goldMenu.addSlot({page: 0, x: 4, y: 2, label: "Random Stuff", item: "minecraft:stick"});
    goldMenu.addSlot({page: 1, x: 4, y: 2, label: "Random Stuff", item: "minecraft:dead_bush"});
    goldMenu.addSlot({page: 2, x: 4, y: 2, label: "Random Stuff", item: "minecraft:flint"});
    goldMenu.addSlot({page: 3, x: 2, y: 2, label: "Random Stuff", item: "minecraft:coal"});
    goldMenu.addSlot({page: 3, x: 4, y: 2, label: "Random Stuff", item: "minecraft:coal"});
    goldMenu.addSlot({page: 3, x: 6, y: 2, label: "Random Stuff", item: "minecraft:coal"});
    
    ironMenu.show(event.player)
  },
  testCertificateMessage () {
    let certificateId = CollectTransHelper.certificateId('items')
    EventMethods.tellPlayer(
      event,
      Text.translate(
        CollectTransHelper.messageKey('categoryCompletedCongrats'),
        TransHelper.itemName(certificateId)
      )
    )
  }
}