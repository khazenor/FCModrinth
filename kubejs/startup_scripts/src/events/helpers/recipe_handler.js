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
    let numNoneBaseIngsOutputs = CookingIngCalcTreeAnalysis.numNoneBaseIngsOutputs(
      firstPassTree, crops
    )
    console.log('numNoneBaseIngsOutputs')
    console.log(numNoneBaseIngsOutputs)
    let level = 1
    let nextPassTree = firstPassTree
    while (numNoneBaseIngsOutputs > 0 && level < maxTries) {
      level ++
      nextPassTree = CookingIngCalcTreeAnalysis.nextPassTree(
        nextPassTree, crops, recipeTree, true, level
      )
      numNoneBaseIngsOutputs = CookingIngCalcTreeAnalysis.numNoneBaseIngsOutputs(
        nextPassTree, crops
      )
      console.log(`nextPassTree: level ${level}`)
      console.log('numNoneBaseIngsOutputs')
      console.log(numNoneBaseIngsOutputs)
    }

    // let baseIngTree = CookingIngCalcTreeAnalysis.analyzeTree(
    //   recipeTree, dishes
    // )
    // CacheHelperConst.cacheObject('base_ing_tree', baseIngTree)
  }
}