const CollectTransHelper = {
  categoryName (categoryId) {
    return this._transForCategory(categoryId, 'categoryName')
  },
  categoryNameCaps (categoryId) {
    return this._transForCategory(categoryId, 'categoryNameCap')
  },
  collectedMessage (collectionId) {
    return this._transForCategory(collectionId, 'collectedMessage')
  },
  messageKey (messageName) {
    return this._collectTransKey(
      `message.${messageName}`
    )
  },
  _transForCategory (categoryId, subTransKey) {
    return Text.translate(
      this._collectTransKey(
        `${categoryId}.${subTransKey}`
      )
    )
  },
  _collectTransKey(child) {
    return `collect.${child}`
  }
}