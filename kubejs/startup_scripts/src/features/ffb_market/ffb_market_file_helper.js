const FfbMarketFileHelper = {
  writeMarketFile (filename, marketObj) {
    IoHelper.writeObj(
      `${this._tradeFolderDir}${filename}.json`,
      marketObj
    )
  },
  _tradeFolderDir: 'kubejs/data/farmingforblockheads/farmingforblockheads_compat/'
}