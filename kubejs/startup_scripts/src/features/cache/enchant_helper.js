const EnchantHelper = {
  get allEnchants () {
    return IoHelper.readObj(this.enchantCacheDir)
  },
  enchantCacheDir: CacheHelperConst.cacheFileDir('all_enchants'),
  transKeyFromEnchantId (enchantId) {
    return `enchantment.${enchantId.replace(':', '.')}`
  }
}