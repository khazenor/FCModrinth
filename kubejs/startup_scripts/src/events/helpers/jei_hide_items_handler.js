const jeiHideItemsHandler = (event) => {
  if (debugMode) {
    let enchants = {};
    event.getAllIngredients().forEach(e => {
      let item = Item.of(e);
      if (item.getId() !== 'minecraft:enchanted_book') return;
      let nbt = item.getNbt();
      for (let enchant of nbt.StoredEnchantments) {
        enchants[enchant.id] = Math.max(enchants[enchant.id] || 0, enchant.lvl);
      }
    });
    IoHelper.writeObj('kubejs/cache/all_enchants.json', enchants)
  }
}