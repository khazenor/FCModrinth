const MilesTicketRecipes = {
  addRecipes: (event) => {
    RecipeHelpers.addShapeless(
      event,
      MilesTicketConsts.ticketId,
      MilesTicketConsts.numTicketsToBundle,
      [MilesTicketConsts.bookletId]
    )
  }
}