const recipeHandler = (event) => {
  MilesTicketRecipes.addRecipes(event)
  CollectRecipes.addRecipes(event)
  FfbMarketRecipes.generateRecipes(event)

  if (debugMode) {
    CookingIngCalcTreeGen.searchForTargetOutputsUsingBaseIngs(
      event,
      CollectCaches.categoryLists['cooking'],
      CollectLists.flora.subCollections.crops.list
    )
  }
}