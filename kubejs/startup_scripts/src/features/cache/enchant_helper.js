const EnchantHelper = {
  get allEnchants () {
    return IoHelper.readObj(this.enchantCacheDir)
  },
  enchantCacheDir: 'kubejs/cache/all_enchants.json',
  transKeyFromEnchantId (enchantId) {
    return `enchantment.${enchantId.replace(':', '.')}`
  }
}