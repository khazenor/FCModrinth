const CookingIngCalcTreeAnalysis = {
  _maxTries: 10,
  getBaseIngTreeByOutputs (allIngsByOutput, recipeTree, targetOutputs, baseIngs, doCache) {
    // first pass
    let firstPassTree = this._firstPassTree(
      allIngsByOutput, targetOutputs, doCache
    )
    let numNoneBaseIngsOutputs = this._numNoneBaseIngsOutputs(
      firstPassTree, baseIngs
    )
    console.log('numNoneBaseIngsOutputs')
    console.log(numNoneBaseIngsOutputs)

    let level = 1
    let nextPassTree = firstPassTree
    while (numNoneBaseIngsOutputs > 0 && level < this._maxTries) {
      level ++
      nextPassTree = this._nextPassTree(
        nextPassTree, baseIngs, recipeTree, doCache, level
      )
      numNoneBaseIngsOutputs = this._numNoneBaseIngsOutputs(
        nextPassTree, baseIngs
      )
      console.log(`nextPassTree: level ${level}`)
      console.log('numNoneBaseIngsOutputs')
      console.log(numNoneBaseIngsOutputs)
    }
    return nextPassTree
  },
  _numNoneBaseIngsOutputs (analyzeTree, baseIngs) {
    let numNoneBaseIngsOutputs = 0
    for (let output in analyzeTree) {
      if (!this._ingsOnlyBaseIngsRecur(analyzeTree[output], baseIngs)) {
        numNoneBaseIngsOutputs ++
      }
    }
    return numNoneBaseIngsOutputs
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
  _firstPassTree (allIngsByOutput, targetOutputs, toCache) {
    let firstPassTree = {}
    for (let output of targetOutputs) {
      firstPassTree[output] = allIngsByOutput[output]
    }
    if (toCache) {
      CacheHelperConst.cacheObject(this._cacheFileName(1), firstPassTree)
    }
    return firstPassTree
  },
  _nextPassTree(analyzeTree, baseIngs, recipeTree, toCache, level) {
    let nextPassTree = {}
    for (let output in analyzeTree) {
      let ings = analyzeTree[output]
      nextPassTree[output] = this._nextPassIngsRecur(ings, baseIngs, recipeTree)
    }
    if (toCache) {
      CacheHelperConst.cacheObject(this._cacheFileName(level), nextPassTree)
    }
    return nextPassTree
  },
  _nextPassIngsRecur (ingObj, baseIngs, recipeTree) {
    if (StrHelper.isStrRobust(ingObj)) {
      if (baseIngs.includes(`${ingObj}`)) {
        return `${ingObj}`
      } else {
        let lowestIngsForOutput = this._lowestIngsForOutput(ingObj, recipeTree)
        if (lowestIngsForOutput) {
          return lowestIngsForOutput
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
  _lowestIngsForOutput(output, recipeTree) {
    for (let i = 0; i < recipeTree.length; i ++) {
      let curRecipeTreeLayer = recipeTree[i]
      for (let recipeOutput in curRecipeTreeLayer) {
        let ings = curRecipeTreeLayer[recipeOutput]
        if (recipeOutput === output) {
          return ings
        }
      }
    }
    return null
  },
  _cacheFileName (level) {
    return `tree_analysis_lv_${level}`
  }
}