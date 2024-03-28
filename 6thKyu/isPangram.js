function isPangram(string){
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let newStr = string.toLowerCase();
  for (let i=0; i<alpha.length; i++) {
    
    if (!newStr.includes(alpha[i])) {
      return false;     
    }
  }
  return true;
}