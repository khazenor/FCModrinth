const recipeHandler = (event) => {
  MilesTicketRecipes.addRecipes(event)
  CollectRecipes.addRecipes(event)
  FfbMarketRecipes.generateRecipes(event)


  if (DebugMode.recipeTreeAnalysis) {
    let recipes = RecipeEventHelper.allRecipes(event)
    CookingIngCalcRecipes.cacheAllIngsByOutput(recipes)
    // let dishes = CollectCaches.categoryLists['cooking']
    // let recipeTree = CookingIngCalcTreeGen.generateBaseIngTree(
    //   event,
    //   dishes,
    //   CollectLists.flora.subCollections.crops.list
    // )
    // let baseIngTree = CookingIngCalcTreeAnalysis.analyzeTree(
    //   recipeTree, dishes
    // )
    // CacheHelperConst.cacheObject('base_ing_tree', baseIngTree)
  }
}