const CookingIngCalcMain = {
  generateCropReqForMeals (event) {
    let doCache = DebugMode.recipeTreeAnalysis_CacheSteps

    let recipes = RecipeEventHelper.allRecipes(event, doCache)
    let allIngsByOutput = CookingIngCalcRecipes.allIngsByOutput(recipes, doCache)

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

    IoHelper.writeObj(this._cacheFileDir, cleanedBaseIngTree)
    return cleanedBaseIngTree
  },
  loadCropReqForMealsFromCache () {
    return IoHelper.readObj(this._cacheFileDir)
  },
  _cacheFolder: 'kubejs/startup_scripts/src/features/cooking/ing_calc/cache/',
  get _cacheFileDir () {
    return `${this._cacheFolder}crop_req_for_meals.json`
  }
}