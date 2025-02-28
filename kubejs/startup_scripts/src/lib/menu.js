// from cyb0124 of KubeJS discord
// https://discord.com/channels/303440391124942858/1279263174167756815/1279263212784717844

/////////////////////////
// Menu Implementation //
/////////////////////////

let MenuState = function(type, player) {
  this.player = player;
  this.type = type;
  this.page = 0;
  player.openChestGUI(type.title, 6, (gui) => this.gui = gui);
  this.showPage();
};

MenuState.prototype.showPage = function() {
  for (let slot of this.type.pages[this.page]) {
    let btn = this.gui.getSlot(slot.x, slot.y);
    btn.setItem(Item.of(slot.item).withName(slot.label));
    for (let event of ['LeftClicked', 'RightClicked', 'MiddleClicked', 'Swapped', 'Thrown', 'ShiftLeftClicked', 'ShiftRightClicked', 'DoubleClicked']) {
      let handler = slot['on' + event];
      handler && btn['set' + event](() => handler(this.player));
    }
  }
  let disabledItem = "minecraft:barrier";
  let enabledItem = "minecraft:slime_ball";
  let enabled = this.page > 0;
  this.gui.button(0, 5, enabled ? enabledItem : disabledItem, "Previous Page", () => this.prevPage());
  enabled = this.page < this.type.pages.length - 1;
  this.gui.button(8, 5, enabled ? enabledItem : disabledItem, "Next Page", () => this.nextPage());
  let pageNum = this.page + 1;
  this.gui.button(4, 5, Item.of("minecraft:paper", pageNum), "Page #" + pageNum, () => {});
};

MenuState.prototype.clearPage = function() {
  for (let slot of this.type.pages[this.page]) {
    let btn = this.gui.getSlot(slot.x, slot.y);
    btn.setItem("minecraft:air");
    btn.resetClickHandlers();
  }
};

MenuState.prototype.prevPage = function() {
  if (this.page <= 0) return;
  this.clearPage();
  --this.page;
  this.showPage();
};

MenuState.prototype.nextPage = function() {
  if (this.page >= this.type.pages.length - 1) return;
  this.clearPage();
  ++this.page;
  this.showPage();
};

let MenuType = function(title) {
  this.title = title;
  this.pages = [];
};

MenuType.prototype.getPage = function(i) {
  if (this.pages[i] === undefined)
    this.pages[i] = [];
  return this.pages[i];
};

MenuType.prototype.addSlot = function(slot) {
  this.getPage(slot.page).push(slot);
};

MenuType.prototype.show = function(player) {
  new MenuState(this, player);
};

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

ItemEvents.rightClicked((event) => {
  if (event.item.id == 'minecraft:iron_ingot') ironMenu.show(event.player);
  else if (event.item.id == 'minecraft:gold_ingot') goldMenu.show(event.player);
});
