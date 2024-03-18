function removeExclamationMarks(s) {
  
    return s.split('').filter(item => item !== '!').join('');
  }