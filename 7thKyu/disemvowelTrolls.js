function disemvowel(str) {
    let array = str.split('')
    let vowels = ['a', 'e','i','o','u','A','E','I','O','U']
    
   let finalStr = array.filter(item => {if (!vowels.includes(item)) {return item}}).join('')
    
    return finalStr;
  }