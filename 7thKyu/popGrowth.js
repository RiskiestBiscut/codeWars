function nbYear(p0, percent, aug, p) {
    let count = 0
    let pop = p0
    
    while (pop < p) {
      pop = Math.floor(pop + pop * (percent/100) + aug)
      count ++
    }
    
    console.log(p0, percent/100, aug, p, count, pop)
    return count;
  }