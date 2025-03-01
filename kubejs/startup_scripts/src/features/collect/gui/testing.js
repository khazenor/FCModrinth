const testGui = (event) => {
}

const _testCodes = {
  showMenu () {
    ironMenu.show(event.player)
  },
  testCertificateMessage () {
    let certificateId = CollectTransHelper.certificateId('items')
    EventMethods.tellPlayer(
      event,
      Text.translate(
        CollectTransHelper.messageKey('categoryCompletedCongrats'),
        TransHelper.itemName(certificateId)
      )
    )
  }
}