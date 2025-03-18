const CookingIngCalcSearch = {
  missingOutputs (baseIngListsByOutput, outputList) {
    let missingOutputs = []
    for (let output of outputList) {
      if (!baseIngListsByOutput[output]) {
        missingOutputs.push(output)
      }
    }
    return missingOutputs
  },
  baseIngListsByOutput (baseIngs, allIngsByOutput) {
    let baseIngListsByOutput = {}
    for (let output in allIngsByOutput) {
      for (let ingList of allIngsByOutput[output]) {
        let baseIngList = []
        for (let ingObj of ingList) {
          let ingOptions = this._getIngOptions(ingObj, baseIngs)
          ArrayHelper.pushNewNonEmptyArrayToArrayList(
            baseIngList, ingOptions
          )
        }
        if (baseIngList.length > 0) {
          ArrayHelper.addToObjectArrayListNoRepeat(
            baseIngListsByOutput,
            output,
            baseIngList
          )
        }
      }
    }
    return baseIngListsByOutput
  },
  _getIngOptions (ingObj, baseIngs) {
    let ingOptions = []
    if (ingObj.tag) {
      Ingredient.of(`#${ingObj.tag}`).stacks.forEach(stack => {
        ArrayHelper.pushElementIfInProvided(
          ingOptions,
          stack.id,
          baseIngs
        )
      })
    } else {
      ArrayHelper.pushElementIfInProvided(
        ingOptions,
        ingObj.item,
        baseIngs
      )
    }
    return ingOptions
  }
}