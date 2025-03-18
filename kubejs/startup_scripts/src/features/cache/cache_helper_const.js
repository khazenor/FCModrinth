const CacheHelperConst = {
  cacheFileDir (filename) {
    return `kubejs/cache/${filename}.json`
  },
  cacheObject (filename, object) {
    IoHelper.writeObj(
      this.cacheFileDir(filename),
      object
    )
  }
}