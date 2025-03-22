const CookingIngCalcTreeCleaning = {
  cleanRawBaseIngTreeByOutputs (rawBaseIngTreeByOutputs, doCache) {
    let cleanedBaseIngTreeByOutputs = {}
    for (let output in rawBaseIngTreeByOutputs) {
      let rawBaseIngTree = rawBaseIngTreeByOutputs[output]
      this._workingBaseIngTree = []
      this._workingVisitedIds = []
      this._cleanRawBaseIngTreeRecur(
        rawBaseIngTree
      )
      cleanedBaseIngTreeByOutputs[output] = this._workingBaseIngTree
    }
    if (doCache) {
      CacheHelperConst.cacheObject('cleaned_base_ing_tree', cleanedBaseIngTreeByOutputs)
    }
    return cleanedBaseIngTreeByOutputs
  },
  _cleanRawBaseIngTreeRecur (ingObj) {
    if (
      StrHelper.isStrRobust(ingObj) &&
      !this._workingVisitedIds.includes(`${ingObj}`)
    ) {
      this._workingBaseIngTree.push(`${ingObj}`)
      this._workingVisitedIds.push(`${ingObj}`)
    } else {
      let ingArray = ArrayHelper.toArray(ingObj)
      if (ingArray && ingArray.length > 1 && StrHelper.isStrRobust(ingArray[0])) {
        this._workingBaseIngTree.push(ingObj)
      } else {
        for (let ingArrayVal of ingArray) {
          this._cleanRawBaseIngTreeRecur(ingArrayVal)
        }
      }
    }
  },
  _workingBaseIngTree: [],
  _workingVisitedIds: []
}