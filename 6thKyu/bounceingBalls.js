function bouncingBall(h,  bounce,  window) {
    if (h > 0 && (bounce > 0 && bounce < 1) && window < h ) {
      let count = 1;
      let ballHeight = h;
      
      while (ballHeight > window) {
        //change height then add 2
        ballHeight *=bounce
        if (ballHeight > window) {
          count +=2
        }
      }
      return count
    } else {
      return -1
    }
  }