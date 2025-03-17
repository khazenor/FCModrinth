const RecipeCacheHelper = {
  get allRecipes () {
    return IoHelper.readObj(this._allRecipeFileDir).recipes
  },
  cacheAllRecipes (event) {
    let recipes = []
    event.forEachRecipe({}, recipe => {
      let recipeObj = JSON.parse(recipe.json)
      recipes.push(recipeObj)
    })
    IoHelper.writeObj(this._allRecipeFileDir, {
      recipes: recipes
    })
  },
  modpackDefinedIngsByOutput: {},
  _allRecipeFileDir: CacheHelperConst.cacheFileDir('all_recipes')
}