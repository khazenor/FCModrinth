const MilesTicketRecipes = {
  addRecipes: (event) => {
    RecipeHelpers.addShapeless(
      event,
      `${MilesTicketConsts.numTicketsToBundle}x ${Const.ticketId}`,
      [Const.bookletId]
    )
  }
}