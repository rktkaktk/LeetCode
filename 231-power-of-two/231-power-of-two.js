/**
 * @param {number} n
 * @return {boolean}
 */

// 8 = 4, 2, 
// 9 = 4.5
var isPowerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  
  if (n <= 2) {
    if (n === 2) {
      return true;    
    } else {
      return false;
    }
  }
  
  if (n > 2) {
    return isPowerOfTwo(n/2);
  }
};