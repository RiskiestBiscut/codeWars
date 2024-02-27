// param: integer, positive or negative
// return: sum of all multiples of 3, 5 OR 0

function solution(number){
    let sum = 0
  
    if (number < 0) {
      return 0
    }
    
    for (let i=0; i<number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i
      }
    }
    
    return sum
  }