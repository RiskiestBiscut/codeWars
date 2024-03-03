function towerBuilder(nFloors) {
    let arr = []
    let round = 1
    let string = '*'
    let space = ' '
    let totalNum = nFloors*2 - 1
    for (let i=0; i<nFloors; i++) {
      let spacesNum
      if ((i + 1) === nFloors) {
        spacesNum = 0
      } else {
        spacesNum = (totalNum - round) / 2
      }
      spacesNum = Math.floor(spacesNum)
      console.log(spacesNum)
      let spaces = space.repeat(spacesNum)
      let str = string.repeat(round)
      let finalStr = spaces + str + spaces
      round += 2
      arr.push(finalStr)
    }
    console.log(arr)
    return arr
  }