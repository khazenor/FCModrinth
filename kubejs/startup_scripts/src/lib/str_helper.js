const StrHelper = {
  cleanFloor: (number) => {
    let decimal = '.'
    let stringVal = `${number}`
    if (stringVal.includes(decimal)) {
      return stringVal.split(decimal)[0]
    } else {
      return stringVal
    }
  }
}