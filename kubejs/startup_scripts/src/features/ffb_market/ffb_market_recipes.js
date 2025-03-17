const FfbMarketRecipes = {
  generateRecipes(event) {
    let milesTickets = MilesTicketConsts.ticketId
    RecipeHelpers.addShapeless(
      event,
      'farmingforblockheads:market',
      1,
      [milesTickets, milesTickets, milesTickets, milesTickets]
    )
  }
}