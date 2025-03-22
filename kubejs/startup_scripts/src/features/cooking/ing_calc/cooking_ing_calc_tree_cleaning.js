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
    if (StrHelper.isStrRobust(ingObj)) {
      if (!this._workingVisitedIds.includes(`${ingObj}`)) {
        this._workingBaseIngTree.push(`${ingObj}`)
        this._workingVisitedIds.push(`${ingObj}`)
      }
    } else {
      if (this._ingObjIsStrArray(ingObj) && ingObj.length > 1) {
        if (this._ingObjJustHaveOneValue(ingObj)) {
          this._cleanRawBaseIngTreeRecur(ingObj[0])
        } else {
          this._workingBaseIngTree.push(ingObj)
        }
      } else {
        for (let ingArrayVal of ingObj) {
          this._cleanRawBaseIngTreeRecur(ingArrayVal)
        }
      }
    }
  },
  _ingObjIsStrArray (ingObj) {
    for (let ingObjChild of ingObj) {
      if (!StrHelper.isStrRobust(ingObjChild)) {
        return false
      }
    }
    return true
  },
  _ingObjJustHaveOneValue(ingObj) {
    let compare = null
    for (let ingObjChild of ingObj) {
      if (compare) {
        if (compare !== ingObjChild) {
          return false
        }
      } else {
        compare = ingObjChild
      }
    }
    return true
  },
  _workingBaseIngTree: [],
  _workingVisitedIds: []
}