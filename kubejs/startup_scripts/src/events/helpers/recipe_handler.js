const recipeHandler = (event) => {
  MilesTicketRecipes.addRecipes(event)
  CollectRecipes.addRecipes(event)
  FfbMarketRecipes.generateRecipes(event)


  if (DebugMode.recipeTreeAnalysis) {
    CookingIngCalcMain.generateCropReqForMeals(event)
  }
}