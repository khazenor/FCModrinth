const MilesTicketTooltips = {
  addTooltips: (event) => {
    EventMethods.add(
      event,
      Const.bookletId,
      [
        Text.translate(
          TransHelper.defaultTransKey(Const.bookletId, 1),
          StrHelper.cleanFloor(MilesTicketConsts.numTicketsToBundle)
        ),
        Text.translate(TransHelper.defaultTransKey(Const.bookletId, 2))
      ]
    )

    EventMethods.add(
      event,
      Const.ticketId,
      Text.translate(TransHelper.defaultTransKey(Const.ticketId, 1))
    )
  }
}