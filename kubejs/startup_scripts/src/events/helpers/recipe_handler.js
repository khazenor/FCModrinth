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
    // let baseIngTree = CookingIngCalcTreeAnalysis.analyzeTree(
    //   recipeTree, dishes
    // )
    // CacheHelperConst.cacheObject('base_ing_tree', baseIngTree)
  }
}