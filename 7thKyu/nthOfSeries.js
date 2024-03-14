// param: number
//return string of a number to 2 decimal places

function SeriesSum(n) {
    let denominator = 1
    let num = 0
    for (let i=0; i<n; i++) {
      num +=  1/denominator
      denominator += 3
    }
  return num.toFixed(2).toString()
  }