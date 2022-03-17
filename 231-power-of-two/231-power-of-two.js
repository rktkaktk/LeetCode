/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n < 2) {
    if (n === 1 || n === 2) {
      return true;    
    } else {
      return false;
    }
  } else {
    return isPowerOfTwo(n/2);
  }
};