const ArrayHelper = {
  toJsArray (objArray) {
    let list = []
    for (let val of objArray) {
      list.push(val)
    }
    return list
  } 
}