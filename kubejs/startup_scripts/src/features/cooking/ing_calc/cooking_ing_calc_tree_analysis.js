const CookingIngCalcTreeAnalysis = {
  baseIngTree: {},
  analyzeTree (recipeTree, targetOutputs, baseIngs) {
    this.baseIngTree = this._firstPassForTargetOutputs(recipeTree, targetOutputs)

    for (let output in this.baseIngTree) {
      this._toBaseIngListRecur(this.baseIngTree[output], baseIngs, recipeTree)
    }

    return this.baseIngTree
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
  _toBaseIngListRecur (ingObj, baseIngs, recipeTree) {
    if (Array.isArray(ingObj)) {
      for (let i = 0; i < ingObj.length; i++) {
        let ingVal = ingObj[i]
        this._toBaseIngListRecur(ingVal)
        
      }
    } else if (!baseIngs.includes(ingObj)) {
      let newIngs = this._lookUpHighestLevelIngForOutput(ingObj, recipeTree)
      if (newIngs) {
        ArrayHelper.addToObjectArray(this.baseIngTree, ingVal, newIngs)
      }
    }
  },
  _lookUpHighestLevelIngForOutput(output, recipeTree) {
    for (let i = recipeTree.length - 1; i >= 0; i --) {
      let curRecipeTreeLayer = recipeTree[i]
      for (let recipeOutput in curRecipeTreeLayer) {
        console.log('output')
        console.log(output)
        console.log('recipeOutput')
        console.log(recipeOutput)
        let ings = curRecipeTreeLayer[recipeOutput]
        if (recipeOutput === output) {
          console.log('recipeOutput === output')
          console.log(output)
          console.log(ings)
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