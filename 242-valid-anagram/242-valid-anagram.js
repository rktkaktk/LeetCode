/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  console.log(s.split('').sort().join(''))
  return s.split('').sort().join() === t.split('').sort().join();
    
};