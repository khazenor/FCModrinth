const RecipeEventHelper = {
  allRecipes (event, doCache) {
    let recipes = []
    event.forEachRecipe({}, recipe => {
      let recipeObj = JSON.parse(recipe.json)
      recipes.push(recipeObj)
    })

    if (doCache) {
      CacheHelperConst.cacheObject(this.allRecipeFilename, recipes)
    }
    return recipes
  },
  modpackDefinedIngsByOutput: {},
  allRecipeFilename: 'all_recipes',
  pushNonRepeatIngs (ingArray, repeatCache, ing, ingType) {
    if (!repeatCache.includes(ing)) {
      repeatCache.push(ing)
      let ingObj = {}
      ingObj[ingType] = ing
      ingArray.push(ingObj)
    }
  }
}

const RecipeEventHelperCacheRecipes = (event) => {
  let recipes = RecipeEventHelper.allRecipes(event)
  IoHelper.writeObj(RecipeEventHelper.allRecipeFileDir, {
    recipes: recipes
  })
}