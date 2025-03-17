const RecipeHelpers = {
  addShapeless: (event, resultId, resultNum, ingList) => {
    let number = StrHelper.cleanFloor(resultNum)
    event.shapeless(`${number}x ${resultId}`, ingList)
  }
}