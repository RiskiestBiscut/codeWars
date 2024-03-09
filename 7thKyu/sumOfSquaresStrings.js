// params: takes an integer
//return the square of sums of that integer

function squareDigits(num){
    // split the integer into single digits
    let splits = num.toString().split('')
    console.log(splits)
    //square the individual integers
    let squares = splits.map(item => {
      return Math.pow(Number(item), 2)    
      
    })
    console.log(squares)
    //add the squares
    let sum = squares.join('')
    // return the sum
    
    return Number(sum);
  }