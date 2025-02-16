const EventGetters = {
  player: (event) => {
    return event.player
  }
}

const EventMethods = {
  tellPlayer: (event, msg) => {
    EventGetters.player(event).tell(msg)
  }
}