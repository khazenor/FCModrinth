const CacheHelperConst = {
  cacheFileDir (filename) {
    return `$devFiles/modpack_cache/${filename}.json`
  },
  cacheObject (filename, object) {
    IoHelper.writeObj(
      this.cacheFileDir(filename),
      object
    )
  }
}