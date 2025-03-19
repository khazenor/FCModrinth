const CookingIngCalcTreeAnalysis = {
  analyzeTree (recipeTree, targetOutputs, baseIngs) {
    let baseIngTree = this._firstPassForTargetOutputs(recipeTree, targetOutputs)

    for (let output in baseIngTree) {
      this._toBaseIngListRecur(baseIngTree[output], baseIngs)
    }

    return baseIngTree
  },
  _firstPassForTargetOutputs (recipeTree, targetOutputs) {
    let baseIngTree = {}
    for (let i = recipeTree.length - 1; i >= 0; i --) {
      let curRecipeTreeLayer = recipeTree[i]
      for (let recipeOutput in curRecipeTreeLayer) {
        let ings = curRecipeTreeLayer[recipeOutput]
        if (targetOutputs.includes(recipeOutput)) {
          ArrayHelper.addToObjectArray(baseIngTree, recipeOutput, ings)
        }
      }
    }
    return baseIngTree
  },
  _toBaseIngListRecur (ingObj, baseIngs) {
    if (ArrayHelper.isArray(ingObj)) {
      for (let i = 0; i < ingObj.length; i++) {
        let ingVal = ingObj[i]
        if (!baseIngs.includes(ingVal)) {
          let newIngs = this._lookUpHighestLevelIngForOutput(ingVal)
          if (newIngs) {
            ingObj[i] = newIngs
          }
        } else if (ArrayHelper.isArray(ingVal)) {
          this._toBaseIngListRecur(ingVal)
        }
      }
    }
  },
  _lookUpHighestLevelIngForOutput(output) {
    for (let i = recipeTree.length - 1; i >= 0; i --) {
      let curRecipeTreeLayer = recipeTree[i]
      for (let recipeOutput in curRecipeTreeLayer) {
        let ings = curRecipeTreeLayer[recipeOutput]
        if (recipeOutput === output) {
          return ings
        }
      }
    }
    return null
  }
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