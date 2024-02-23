//param: list of pairs, pairs are two integers, age, hanndicap
//return: list of strings, output 'Open' or 'Senior'

function openOrSenior(data){
    let arr = []
   //loop
   data.forEach(item => {
     
      //check first item >= 55
      if (item[0] >= 55) {
        //if >= 55 check second param > 
        if (item[1] > 7) {
          arr.push('Senior')
        } else {
          arr.push('Open')
        }
      } else {
        // else output open
        arr.push('Open')
      }
      console.log(arr)
      return arr
    })
    return arr
  }
  
  //example: [[45, 6], [56, 8], [63, 1]] -> 'Open','Senior','Open'