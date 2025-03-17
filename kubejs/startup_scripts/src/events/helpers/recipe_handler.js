const recipeHandler = (event) => {
  MilesTicketRecipes.addRecipes(event)
  CollectRecipes.addRecipes(event)
  FfbMarketRecipes.generateRecipes(event)

  if (debugMode) {
    RecipeCacheHelper.cacheAllRecipes(event)
  }
}