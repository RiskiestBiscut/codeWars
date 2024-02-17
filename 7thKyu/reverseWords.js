function reverseWords(str) {
    let newStr = str.split(' ')
    let anothaOne = newStr.map(word => word.split('').reverse().join(''))
    anothaOne
    return anothaOne.join(' ')
  }