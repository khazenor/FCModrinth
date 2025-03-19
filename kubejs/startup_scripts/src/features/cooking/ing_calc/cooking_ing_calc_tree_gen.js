const CookingIngCalcTreeGen = {
  _maxSearchTries: 10,
  searchForTargetOutputsUsingBaseIngs(event, targetOutputs, baseIngs) {
    RecipeCacheHelper.cacheAllRecipes(event)
    
    let allIngsByOutput = CookingIngCalcRecipes.allIngsByOutput
    CacheHelperConst.cacheObject('all_ings_by_output', allIngsByOutput)
    
    let allBaseIngListsByOutput = []

    let baseIngListsByOutput = this.baseIngListsByOutput(
      baseIngs,
      allIngsByOutput
    )
    allBaseIngListsByOutput.push(baseIngListsByOutput)

    CacheHelperConst.cacheObject(this.baseIngsByOutputFilename(1), baseIngListsByOutput)
    console.log('missingOutputs')
    let missingOutput = this.missingOutputs(
      baseIngListsByOutput,
      targetOutputs
    )
    console.log(`missingOutputLen: ${missingOutput.length}`)
    let tries = 1
    let prevMissingLen
    while (missingOutput.length > 0 && tries <= this._maxSearchTries) {
      tries ++
      prevMissingLen = missingOutput.length
      let newBaseIngs = Object.keys(baseIngListsByOutput)
      baseIngListsByOutput = this.baseIngListsByOutput(
        newBaseIngs,
        allIngsByOutput
      )
      allBaseIngListsByOutput.push(baseIngListsByOutput)
      CacheHelperConst.cacheObject(this.baseIngsByOutputFilename(tries), baseIngListsByOutput)
      console.log(`missingOutputs${tries}`)
      missingOutput = this.missingOutputs(
        baseIngListsByOutput,
        missingOutput
      )
      console.log(`missingOutputLen: ${missingOutput.length}`)
    }
    console.log(`missingOutput`)
    console.log(missingOutput)
  },
  baseIngsByOutputFilename (tries) {
    return `base_ings_by_output_${tries}`
  },
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
    if (ingObj.item || ingObj.tag) {
      this.addBaseIngs(ingOptions, ingObj, baseIngs)
    } else if (
      ArrayHelper.isArray(ingObj)
    ) {
      for (let ingArrayObj of ingObj) {
        this.addBaseIngs(ingOptions, ingArrayObj, baseIngs)
      }
    } else if (DebugMode.recipeTreeAnalysisLogging) {
      FcLogger.log('Error processing ingredient: CookingIngCalcTreeGen._getIngOptions')
      console.log(ingObj)
    }
    return ingOptions
  },
  addBaseIngs (ingOptions, ingObj, baseIngs) {
    if (ingObj.tag) {
      Ingredient.of(`#${ingObj.tag}`).stacks.forEach(stack => {
        ArrayHelper.pushElementIfInProvided(
          ingOptions,
          stack.id,
          baseIngs
        )
      })
    } else if (ingObj.item) {
      ArrayHelper.pushElementIfInProvided(
        ingOptions,
        ingObj.item,
        baseIngs
      )
    } else if (DebugMode.recipeTreeAnalysisLogging) {
      FcLogger.log('Error processing ingredient: CookingIngCalcTreeGen.addBaseIngs')
      console.log(ingObj)
    }
  }
}