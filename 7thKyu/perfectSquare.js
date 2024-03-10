//params: Num
//return: true or false

var isSquare = function(n){
    //check n >=0
    if (n >= 0) {
       //loop through num 0-n
      for (let i=0; i<=n; i++) {
        //check if num*num is n
        if (i*i === n) {
          return true
        }
      }
      return false
    } else {
        return false
      }
  }