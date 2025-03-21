const RecipeEventHelper = {
  get allRecipesFromCache () {
    return CacheHelperConst.loadCache(this.allRecipeFilename)
  },
  cacheAllRecipes (event) {
    let recipes = this.allRecipes(event)
    CacheHelperConst.cacheObject(this.allRecipeFilename, recipes)
    return recipes
  },
  allRecipes (event) {
    let recipes = []
    event.forEachRecipe({}, recipe => {
      let recipeObj = JSON.parse(recipe.json)
      recipes.push(recipeObj)
    })
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