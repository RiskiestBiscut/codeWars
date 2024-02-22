function squareSum(numbers){
  return numbers.reduce((acc, c) => {
   return acc += Math.pow(c, 2)
  }, 0)
}