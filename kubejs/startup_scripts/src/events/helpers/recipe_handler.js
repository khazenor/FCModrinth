const recipeHandler = (event) => {
  MilesTicketRecipes.addRecipes(event)
  CollectRecipes.addRecipes(event)
  FfbMarketRecipes.generateRecipes(event)

  if (debugMode) {
    RecipeCacheHelper.cacheAllRecipes(event)
    
    let allIngsByOutput = CookingIngCalcRecipes.allIngsByOutput
    CacheHelperConst.cacheObject('all_ings_by_output', allIngsByOutput)
    
    let baseIngListsByOutput = CookingIngCalcSearch.baseIngListsByOutput(
      CollectLists.flora.subCollections.crops.list,
      allIngsByOutput
    )
    CacheHelperConst.cacheObject('base_ings_by_ouput', baseIngListsByOutput)
  }
}