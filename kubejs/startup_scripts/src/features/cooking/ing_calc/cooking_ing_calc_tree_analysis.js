const CookingIngCalcTreeAnalysis = {
  baseIngTree: {},
  cacheFileName (level) {
    return `tree_analysis_lv_${level}`
  },
  isTreeOnlyBaseIngs (analyzeTree, baseIngs) {
    for (let output in analyzeTree) {
      if (!this._ingsOnlyBaseIngsRecur(analyzeTree[output], baseIngs)) {
        return false
      }
    }
    return true
  },
  _ingsOnlyBaseIngsRecur (ingObj, baseIngs) {
    if (StrHelper.isStrRobust(ingObj)) {
      return baseIngs.includes(`${ingObj}`)
    } else {
      let returnBoolean = true
      for (let ingObjChild of ingObj) {
        let recurVal = this._ingsOnlyBaseIngsRecur(ingObjChild, baseIngs)
        returnBoolean = recurVal && returnBoolean
      }
      return returnBoolean
    }
  },
  firstPassTree(allIngsByOutput, targetOutputs, toCache) {
    let firstPassTree = {}
    for (let output of targetOutputs) {
      firstPassTree[output] = allIngsByOutput[output]
    }
    if (toCache) {
      CacheHelperConst.cacheObject(this.cacheFileName(1), firstPassTree)
    }
    return firstPassTree
  },
  nextPassTree(analyzeTree, baseIngs, recipeTree, toCache, level) {
    let nextPassTree = {}
    for (let output in analyzeTree) {
      let ings = analyzeTree[output]
      nextPassTree[output] = this._nextPassIngsRecur(ings, baseIngs, recipeTree)
    }
    if (toCache) {
      CacheHelperConst.cacheObject(this.cacheFileName(level), nextPassTree)
    }
    return nextPassTree
  },
  _nextPassIngsRecur (ingObj, baseIngs, recipeTree) {
    if (StrHelper.isStrRobust(ingObj)) {
      if (baseIngs.includes(`${ingObj}`)) {
        return `${ingObj}`
      } else {
        let ingsOptions = this._ingsOptionsForOutput(ingObj, recipeTree)
        if (ingsOptions.length > 0) {
          return ingsOptions
        }
      }
    } else { // array
      let returnList = []
      for (let ingObjChild of ingObj) {
        let nextVal = this._nextPassIngsRecur(ingObjChild, baseIngs, recipeTree)
        if (nextVal) {
          returnList.push(nextVal)
        }
      }
      return returnList
    }
  },
  _ingsOptionsForOutput(output, recipeTree) {
    let ingsOptions = []
    for (let i = 0; i < recipeTree.length; i ++) {
      let curRecipeTreeLayer = recipeTree[i]
      for (let recipeOutput in curRecipeTreeLayer) {
        let ings = curRecipeTreeLayer[recipeOutput]
        if (recipeOutput === output) {
          ingsOptions.push(ings)
        }
      }
    }
    return ingsOptions
  }
}