const ArrayHelper = {
  toStrArray (objArray) {
    let list = []
    for (let val of objArray) {
      list.push(StrHelper.replaceAll(`${val}`, '"', ''))
    }
    return list
  } 
}