function positiveSum(arr) {
    let filtered = arr.filter(item => item > 0)
    return filtered.reduce((acc, c) => {return acc += c}, 0)
  }