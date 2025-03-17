const CollectRecipes = {
  addRecipes (event) {
    RecipeHelpers.addShapeless(event, CollectGuiConst.id.mainMenu, 1, [
      'minecraft:writable_book',
      'minecraft:spyglass'
    ])
  }
}