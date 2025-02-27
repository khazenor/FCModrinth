const ArrayHelper = {
  toStrArray (objArray) {
    let list = []
    for (let val of objArray) {
      list.push(StrHelper.cleanStr(val))
    }
    return list
  } 
}