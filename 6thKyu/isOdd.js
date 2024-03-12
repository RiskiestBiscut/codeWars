// params: array of integers
// return: return int that appears odd number of times in array

function findOdd(A) {
    let arr = []
     const newArr = A.forEach(item => {
        
       if (!arr.includes(item)) {
         arr.push(item)
       }
       return arr
     })
     
     for (let i=0; i< arr.length; i++) {
       if (countSame(A, arr[i]) % 2 !== 0) {
         return arr[i]
       }
     }
   
   }
   
   function countSame(array, value) {
     let count = 0
     array.forEach(item => (item === value && count ++))
     return count
   }
   
   // create array of unique ints
   // check how many times int appears in original array
   // if odd number return number
   // if not odd conitnue checking 