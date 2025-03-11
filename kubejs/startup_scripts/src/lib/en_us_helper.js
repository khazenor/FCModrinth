const EnUsHelper = {
  addTrans (key, val) {
    let en_us = this._loadLang
    en_us[key] = val
    this._saveLang(en_us)
  },
  _loadLang () {
    return IoHelper.readObj(this._langFileDir)
  },
  _saveLang (langObj) {
    IoHelper.writeObj(this._langFileDir, langObj)
  },
  _langFileDir: 'kubejs/assets/kubejs/lang/en_us.json'
}