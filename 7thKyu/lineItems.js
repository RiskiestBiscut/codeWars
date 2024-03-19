var number=function(array){
    let newArr = array.map((item, i) => `${i+1}: ${item}`)
    return newArr;
  }