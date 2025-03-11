const CollectEntity = {
  listToSpawnEggs (typeList) {
    return typeList.map(eType => this.spawnEggFromEntityType(eType))
  },
  spawnEggFromEntityType (entityType) {
    if (entityType.includes(this._alexsmobs)) {
      return `${this._alexsmobs}spawn_egg_${entityType.replace(this._alexsmobs, '')}`
    }
    return `${entityType}_spawn_egg`
  },
  isEntityCollection (collectionId) {
    return `${collectionId}` === 'entities'
  },
  _alexsmobs: 'alexsmobs:'
}