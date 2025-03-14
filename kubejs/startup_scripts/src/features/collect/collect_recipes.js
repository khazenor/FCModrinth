const CollectRecipes = {
  addRecipes (event) {
    RecipeHelpers.addShapeless(event, CollectGuiConst.id.mainMenu, [
      'minecraft:writable_book',
      'minecraft:spyglass'
    ])
  }
}