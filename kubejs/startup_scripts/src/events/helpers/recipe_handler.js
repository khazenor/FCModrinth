const recipeHandler = (event) => {
  MilesTicketRecipes.addRecipes(event)
  CollectRecipes.addRecipes(event)
  FfbMarketRecipes.generateRecipes(event)


  if (DebugMode.recipeTreeAnalysis) {
    let recipes = RecipeEventHelper.cacheAllRecipes(event)
    let allIngsByOutput = CookingIngCalcRecipes.cacheAllIngsByOutput(recipes)

    let dishes = CollectCaches.categoryLists['cooking']
    let crops = CollectLists.flora.subCollections.crops.list
    let recipeTree = CookingIngCalcTreeGen.generateBaseIngTree(
      allIngsByOutput, dishes, crops, true
    )
    let baseIngTreeByOutputs = CookingIngCalcTreeAnalysis.getBaseIngTreeByOutputs(
      allIngsByOutput, recipeTree, dishes, crops, true
    )
    let cleanedBaseIngTree = CookingIngCalcTreeCleaning.cleanRawBaseIngTreeByOutputs(
      baseIngTreeByOutputs, true
    )
  }
}