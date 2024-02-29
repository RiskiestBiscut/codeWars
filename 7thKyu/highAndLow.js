function highAndLow(numbers){
    let arr = numbers.split(' ')
    let num1 = Math.max(...arr)
    let num2 = Math.min(...arr)
    return `${num1} ${num2}`
  }