const CookingIngCalcRecipes = {
  cacheAllIngsByOutput(recipes) {
    CacheHelperConst.cacheObject('all_ings_by_output', this.allIngsByOutput(recipes))
  },
  allIngsByOutput (recipes) {
    let existingIngsByOutput = this.ingsByOutput(recipes)
    return ArrayHelper.mergeObjectArrays(
      existingIngsByOutput,
      RecipeEventHelper.modpackDefinedIngsByOutput
    )
  },
  ingsByOutput (recipes) {
    let ingsByOutput = {}
    for (let recipe of recipes) {
      let outputs = this._outputs(recipe)
      let ings = this._ingredients(recipe)
      if (outputs && ings) {
        for (let output of outputs) {
          ArrayHelper.addToObjectArray(
            ingsByOutput, output, ings
          )
        }
      }
    }
    return ingsByOutput
  },
  _outputs(recipe) {
    let outputs = []
    if (recipe.result) {
      if (StrHelper.isStr(recipe.result)) {
        outputs.push(recipe.result)
        return outputs
      } else if (recipe.result.item) {
        outputs.push(recipe.result.item)
        return outputs
      } else if (ArrayHelper.isArray(recipe.result)) {
        for (let resultObj of recipe.result) {
          outputs.push(resultObj.item)
        }
        return outputs
      } else {
        FcLogger.log(`Error parsing recipe result: ${recipe.result}`)
      }
    } else {
      return null
    }
  },
  _ingredients(recipe) {
    let rawIngredients = recipe.ingredients
    let rawIngredient = recipe.ingredient
    let rawKeys = recipe.key
    let ings = []
    if (!rawIngredient && !rawIngredients && !rawKeys) {
      return null
    }

    if (rawIngredient) {
      rawIngredients = [rawIngredient]
    }
    
    if (rawKeys) {
      rawIngredients = []
      for (let rawKey in rawKeys) {
        rawIngredients.push(rawKeys[rawKey])
      }
    }

    for (let ing of rawIngredients) {
      let repeatCache = []
      let pushIng = (ing, key) => {
        RecipeEventHelper.pushNonRepeatIngs(ings, repeatCache, ing, key)
      }
      if (ing.item) {
        pushIng(ing.item, 'item')
      } else if (ing.tag) {
        pushIng(ing.tag, 'tag')
      } else if (ArrayHelper.isArray(ing)) {
        ings.push(ing)
      } else if (DebugMode.recipeTreeAnalysisLogging) {
        FcLogger.log('Error processing ingredient: CookingIngCalcRecipes')
        console.log(ing)
      }
    }
    return ings
  }
}