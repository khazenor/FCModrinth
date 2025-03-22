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

    let maxTries = 10
    let firstPassTree = CookingIngCalcTreeAnalysis.firstPassTree(
      allIngsByOutput, dishes, true
    )
    let isTreeOnlyBaseIngs = CookingIngCalcTreeAnalysis.isTreeOnlyBaseIngs(
      firstPassTree, crops
    )
    console.log('isTreeOnlyBaseIngs')
    console.log(isTreeOnlyBaseIngs)
    let level = 1
    let nextPassTree = firstPassTree
    while (!isTreeOnlyBaseIngs && level < maxTries) {
      level ++
      nextPassTree = CookingIngCalcTreeAnalysis.nextPassTree(
        nextPassTree, crops, recipeTree, true, level
      )
      isTreeOnlyBaseIngs = CookingIngCalcTreeAnalysis.isTreeOnlyBaseIngs(
        nextPassTree, crops
      )
      console.log(`nextPassTree: level ${level}`)
      console.log('isTreeOnlyBaseIngs')
      console.log(isTreeOnlyBaseIngs)
    }
    // let baseIngTree = CookingIngCalcTreeAnalysis.analyzeTree(
    //   recipeTree, dishes
    // )
    // CacheHelperConst.cacheObject('base_ing_tree', baseIngTree)
  }
}