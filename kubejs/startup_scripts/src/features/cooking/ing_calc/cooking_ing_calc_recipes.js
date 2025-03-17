const CookingIngCalcRecipes = {
  get allIngsByOutput () {
    let existingIngsByOutput = this.ingsByOutput
    return ArrayHelper.mergeObjectArrays(
      existingIngsByOutput,
      RecipeCacheHelper.modpackDefinedIngsByOutput
    )
  },
  get ingsByOutput () {
    let recipes = RecipeCacheHelper.allRecipes
    let ingsByOutput = {}
    for (let recipe of recipes) {
      let output = this._singleOutput(recipe)
      let ings = this._ingredients(recipe)
      if (output && ings) {
        ArrayHelper.addToObjectArray(
          ingsByOutput, output, ings
        )
      }
    }
    return ingsByOutput
  },
  _singleOutput(recipe) {
    if (recipe.result && recipe.result.item) {
      return recipe.result.item
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
        RecipeCacheHelper.pushNonRepeatIngs(ings, repeatCache, ing, key)
      }
      if (ing.item) {
        pushIng(ing.item, 'item')
      }
      if (ing.tag) {
        pushIng(ing.tag, 'tag')
      }
    }
    return ings
  }
}