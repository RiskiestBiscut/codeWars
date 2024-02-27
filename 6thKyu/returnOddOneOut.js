//return the odd int out

function findOutlier(integers){
    //check if array is odd or even
    let checks = integers.map((item, i) => {
      if (integers[i] % 2 === 0) {
        return 'even'
      } else {
        return 'odd'
      }
    })
    
    console.log(checks)
    
    let even = checks.reduce((acc, c) => {
      if (c === 'even'){
        return acc += 1
      } else {
        return acc
      }
    }, 0)
    
    let odd = checks.reduce((acc, c) => {
      if (c === 'odd'){
       return acc += 1
      } else {
        return acc
      }
    }, 0)
    
    console.log(even)
    console.log(odd)
    
    //return index of outlier
    let index
    if (even > odd) {
      index = checks.indexOf('odd')
    } else {
      index = checks.indexOf('even')
    }
    console.log(index)
    return integers[index]
    
    
  }
  
  //example [1, 2, 3] -> return 2