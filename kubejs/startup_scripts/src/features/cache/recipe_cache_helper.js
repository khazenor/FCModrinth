const RecipeCacheHelper = {
  cacheAllRecipes (event) {
    let recipes = []
    event.forEachRecipe({}, recipe => {
      let recipeObj = JSON.parse(recipe.json)
      recipes.push(recipeObj)
    })
    IoHelper.writeObj(CacheHelperConst.cacheFileDir('all_recipes'), {
      recipes: recipes
    })
  }
}