const loggedInHandler = (event) => {
  if (EventHelpers.playerName(event) === "Khazenor") {
    CollectListHelper.writeAllTranslations()
  }
}