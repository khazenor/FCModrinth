const CookingIngCalcTreeGen = {
  _maxSearchTries: 10,
  loadBaseIngTreeFromCache(finalTryIdx) {
    let baseIngTree = []
    for (let tryIdx = 1; tryIdx <= finalTryIdx; tryIdx ++) {
      baseIngTree.push(CacheHelperConst.loadCache(
        this.baseIngsByOutputFilename(tryIdx)
      ))
    }
    return baseIngTree
  },
  generateBaseIngTree(allIngsByOutput, targetOutputs, baseIngs, doCacheSteps) {
    let baseIngTree = []

    // try 1
    let baseIngListsByOutput = this.baseIngListsByOutput(
      baseIngs,
      allIngsByOutput
    )
    baseIngTree.push(baseIngListsByOutput)
    if (doCacheSteps) {
      CacheHelperConst.cacheObject(this.baseIngsByOutputFilename(1), baseIngListsByOutput)
    }
    console.log('missingOutputs')
    let missingOutput = this.missingOutputs(
      baseIngListsByOutput,
      targetOutputs
    )
    console.log(`missingOutputLen: ${missingOutput.length}`)

    // tries > 1
    let tries = 1
    while (missingOutput.length > 0 && tries <= this._maxSearchTries) {
      tries ++
      let newBaseIngs = Object.keys(baseIngListsByOutput)
      baseIngListsByOutput = this.baseIngListsByOutput(
        newBaseIngs,
        allIngsByOutput
      )
      baseIngTree.push(baseIngListsByOutput)
      if (doCacheSteps) {
        CacheHelperConst.cacheObject(this.baseIngsByOutputFilename(tries), baseIngListsByOutput)
      }
      console.log(`missingOutputs${tries}`)
      missingOutput = this.missingOutputs(
        baseIngListsByOutput,
        missingOutput
      )
      console.log(`missingOutputLen: ${missingOutput.length}`)
    }
    console.log(`missingOutput`)
    console.log(missingOutput)
    return baseIngTree
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
          if (StrHelper.isStrRobust(ingObj)) {
            if (baseIngs.includes(`${ingObj}`)) {
              baseIngList.push(`${ingObj}`)
            }
          } else { // array
            let baseIngOptions = []
            for (let ingOption of ingObj) {
              if (baseIngs.includes(`${ingOption}`)) {
                baseIngOptions.push(`${ingOption}`)
              }
            }
            if (baseIngOptions.length > 0) {
              baseIngList.push(baseIngOptions)
            }
          }
        }
        
        if (baseIngList.length > 0) {
          baseIngListsByOutput[output] = baseIngList
        }
      }
    }
    return baseIngListsByOutput
  }
}