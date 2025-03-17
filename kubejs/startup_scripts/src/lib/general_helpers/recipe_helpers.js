const RecipeHelpers = {
  addShapeless: (event, resultId, resultNum, ingList) => {
    let number = StrHelper.cleanFloor(resultNum)
    event.shapeless(`${number}x ${resultId}`, ingList)

    if (debugMode) {
      let recipeIngList = []
      let duplicateCache = []
      for (let ing of ingList) {
        let ingName
        let ingType
        if (ing.includes('#')) {
          ingName = ing.replace('#', '')
          ingType = 'tag'
        } else {
          ingName = ing
          ingType = 'item'
        }
        RecipeCacheHelper.pushNonRepeatIngs(
          recipeIngList,
          duplicateCache,
          ingName,
          ingType
        )
      }
      ArrayHelper.addToObjectArray(
        RecipeCacheHelper.modpackDefinedIngsByOutput,
        resultId,
        recipeIngList
      )
    }
  }
}