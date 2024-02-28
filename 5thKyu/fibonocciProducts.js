//params: int, positive
//return: array with two fibonocci consecutive numbers and true if it equals param, false if none exists, numbers are smalles product > param

function productFib(prod){
    let check = true;
    let i = 0
     //loop through consecutive fib products
    while(check) {
      //check if product >= param
      if (fibNum(i) * fibNum(i + 1) === prod) {
        return [fibNum(i), fibNum(i+1), true]
        check = false
      } else if (fibNum(i) * fibNum(i + 1) > prod) {
        return [fibNum(i), fibNum(i+1), false]
        check = false
      }
       i++
    }
    
  }
  
  //check fibNum
  function fibNum(n) {
    if (n<=1) {
      return n
    }
    
    return fibNum(n - 1) + fibNum(n - 2)
  }
  