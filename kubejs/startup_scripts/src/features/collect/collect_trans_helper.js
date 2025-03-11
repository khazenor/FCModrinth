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
  categoryNameKey (categoryId) {
    return this._transKeyForCategory(categoryId, 'categoryName')
  },
  categoryNameCapsKey (categoryId) {
    return this._transKeyForCategory(categoryId, 'categoryNameCap')
  },
  collectedMessageKey (collectionId) {
    return this._transKeyForCategory(collectionId, 'collectedMessage')
  },
  messageKey (messageName) {
    return this._collectTransKey(
      `message.${messageName}`
    )
  },
  certificateId(categoryId) {
    return `kubejs:${categoryId}_certificate`
  },
  _transForCategory (categoryId, subTransKey) {
    return Text.translate(
      this._transKeyForCategory(categoryId, subTransKey)
    )
  },
  _transKeyForCategory (categoryId, subTransKey) {
    return this._collectTransKey(
      `${categoryId}.${subTransKey}`
    )
  },
  _collectTransKey(child) {
    return `collect.${child}`
  }
}