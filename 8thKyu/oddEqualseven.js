function lovefunc(flower1, flower2){
    let one = oddOrEven(flower1)
    let two = oddOrEven(flower2)
    return one === two ? false : true
  }
  
  function oddOrEven(param) {
    return param % 2 === 0 ? 'even' : 'odd'
  }