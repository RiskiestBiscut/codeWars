function sumTwoSmallestNumbers(numbers) {  
  // create array of two lowest nums
  let sortArr = numbers.sort((a,b) => a-b)
  let newArr = sortArr.splice(0,2)
  
  return newArr.reduce((acc, c) => acc += c)
}