const CookingIngCalcTreeAnalysis = {
  baseIngTree: {},
  cacheFileName (level) {
    return `tree_analysis_lv_${level}`
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
      nextPassTree[output] = this.nextPassIngsRecur(ings, baseIngs, recipeTree, 
        false
      )
    }
    if (toCache) {
      CacheHelperConst.cacheObject(this.cacheFileName(level), nextPassTree)
    }
  },
  nextPassIngsRecur (ingObj, baseIngs, recipeTree, doLog) {
    if (doLog) {
      console.log('ingObj')
      console.log(typeof ingObj)
      console.log(ingObj)
    }
    if (
      typeof ingObj === 'string' ||
      StrHelper.isStr(ingObj) ||
      (
        typeof ingObj === 'object' &&
        ingObj[0].length === 1
      )
    ) {
      if (doLog) {
        console.log(`isStr:${ingObj}`)
      }
      if (baseIngs.includes(`${ingObj}`)) {
        return `${ingObj}`
      } else {
        let ingsOptions = this.ingsOptionsForOutput(ingObj, recipeTree, doLog)
        if (ingsOptions.length > 0) {
          return ingsOptions
        }
      }
    } else { // array
      if (doLog) {
        console.log(`array:${ingObj}`)
      }
      let returnList = []
      for (let ingObjChild of ingObj) {
        let nextVal = this.nextPassIngsRecur(ingObjChild, baseIngs, recipeTree, doLog)
        if (nextVal) {
          returnList.push(nextVal)
        }
      }
      return returnList
    }
  },
  ingsOptionsForOutput(output, recipeTree, doLog) {
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
    if (doLog) {
      console.log('ingsOptionsForOutput')
      console.log(output)
      console.log('ingOptions')
      console.log(ingsOptions)
    }
    return ingsOptions
  }
  // analyzeTree (recipeTree, targetOutputs, baseIngs) {
  //   this.baseIngTree = this._firstPassForTargetOutputs(recipeTree, targetOutputs)

  //   for (let output in this.baseIngTree) {
  //     this._toBaseIngListRecur(this.baseIngTree[output], baseIngs, recipeTree)
  //   }

  //   return this.baseIngTree
  // },
  // _firstPassForTargetOutputs (recipeTree, targetOutputs) {
  //   let baseIngTree = {}
  //   for (let i = recipeTree.length - 1; i >= 0; i --) {
  //     let curRecipeTreeLayer = recipeTree[i]
  //     for (let recipeOutput in curRecipeTreeLayer) {
  //       let ings = curRecipeTreeLayer[recipeOutput]
  //       if (targetOutputs.includes(recipeOutput)) {
  //         ArrayHelper.addToObjectArray(baseIngTree, recipeOutput, ings)
  //       }
  //     }
  //   }
  //   return baseIngTree
  // },
  // _toBaseIngListRecur (ingObj, baseIngs, recipeTree) {
  //   if (Array.isArray(ingObj)) {
  //     for (let i = 0; i < ingObj.length; i++) {
  //       let ingVal = ingObj[i]
  //       this._toBaseIngListRecur(ingVal)
        
  //     }
  //   } else if (!baseIngs.includes(ingObj)) {
  //     let newIngs = this.ingsOptionsForOutput(ingObj, recipeTree)
  //     if (newIngs) {
  //       ArrayHelper.addToObjectArray(this.baseIngTree, ingVal, newIngs)
  //     }
  //   }
  // },
  // _incorporateRecipeInformation (baseIngTree, output, ings, baseIngs, recipeTree) {
  //   for (let treeOutput in baseIngTree) {
  //     this._replaceIngWithIngArrayRecur(
  //       baseIngTree[treeOutput],
  //       output,
  //       ings,
  //       baseIngs,
  //       recipeTree
  //     )
  //   }
  // },
  // _replaceIngWithIngArrayRecur (ingObj, targetIng, ingArray, baseIngs, recipeTree) {
  //   if (ArrayHelper.isArray(ingObj)) {
  //     for (let i = 0; i < ingObj.length; i++) {
  //       let ingVal = ingObj[i]
  //       if (ingVal === targetIng) {
  //         ingObj[i] = ingArray
  //       } else if (ArrayHelper.isArray(ingVal)) {
  //         this._replaceIngWithIngArrayRecur(ingVal)
  //       }
  //     }
  //   }
  // }
}