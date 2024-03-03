function XO(str) {
    let lowerStr = str.toLowerCase()
    let x = 0
    let o = 0
    lowerStr.split('').forEach(item => {
      if (item === 'x') {
        x++
      } else if (item === 'o') {
        o++
      }
    })
  if (x === o) {
    return true
  } else {
    return false
  }
}