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
      if (ing.item && StrHelper.isStr(ing.item)) {
        ings.push(`${ing.item}`)
      } else if (ing.tag) {
        ings.push(this._tagItems(ing.tag))
      } else if (ing[0]) {
        let ingOptions = []
        for (let arrayIngObj of ing) {
          if (arrayIngObj.item) {
            ingOptions.push(`${arrayIngObj.item}`)
          } else if (arrayIngObj.tag) {
            ingOptions.push(this._tagItems(arrayIngObj.tag))
          } else if (DebugMode.recipeTreeAnalysisLogging) {
            FcLogger.log('Error processing ingredient: CookingIngCalcRecipes: for (let arrayIngObj of ing)')
            console.log(ing)
          }
        }
      } else if (DebugMode.recipeTreeAnalysisLogging) {
        FcLogger.log('Error processing ingredient: CookingIngCalcRecipes')
        console.log(ing)
      }
    }
    return ings
  },
  _tagItems (tag) {
    let tagItems = []
    Ingredient.of(`#${tag}`).stacks.forEach(stack => {
      tagItems.push(stack.id)
    })
    return tagItems
  }
}