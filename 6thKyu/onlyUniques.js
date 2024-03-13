//params

var uniqueInOrder=function(iterable){
    let arr
    if (typeof iterable === 'string') {
    arr = iterable.split('')
    } else {
      arr = iterable
    }
    
    
    return arr.filter((item, i) => {
      if (item !== iterable[i + 1]) {
        return item
      }
    })
  }