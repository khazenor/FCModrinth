const recipeHandler = (event) => {
  MilesTicketRecipes.addRecipes(event)
  CollectRecipes.addRecipes(event)
  FfbMarketRecipes.generateRecipes(event)

  if (debugMode) {
    RecipeCacheHelper.cacheAllRecipes(event)
    
    let allIngsByOutput = CookingIngCalcRecipes.allIngsByOutput
    CacheHelperConst.cacheObject('all_ings_by_output', allIngsByOutput)
    
    let allBaseIngListsByOutput = []

    let baseIngListsByOutput = CookingIngCalcSearch.baseIngListsByOutput(
      CollectLists.flora.subCollections.crops.list,
      allIngsByOutput
    )
    allBaseIngListsByOutput.push(baseIngListsByOutput)

    CacheHelperConst.cacheObject('base_ings_by_output_1', baseIngListsByOutput)
    console.log('missingOutputs')
    let missingOutput = CookingIngCalcSearch.missingOutputs(
      baseIngListsByOutput,
      CollectCaches.categoryLists['cooking']
    )
    console.log(`missingOutputLen: ${missingOutput.length}`)
    let tries = 1
    let prevMissingLen
    while (missingOutput.length > 0 && tries <= 10) {
      tries ++
      prevMissingLen = missingOutput.length
      let newBaseIngs = Object.keys(baseIngListsByOutput)
      baseIngListsByOutput = CookingIngCalcSearch.baseIngListsByOutput(
        newBaseIngs,
        allIngsByOutput
      )
      allBaseIngListsByOutput.push(baseIngListsByOutput)
      CacheHelperConst.cacheObject(`base_ings_by_output_${tries}`, baseIngListsByOutput)
      console.log(`missingOutputs${tries}`)
      missingOutput = CookingIngCalcSearch.missingOutputs(
        baseIngListsByOutput,
        missingOutput
      )
      console.log(`missingOutputLen: ${missingOutput.length}`)
    }
    console.log(`missingOutput`)
    console.log(missingOutput)
  }
}