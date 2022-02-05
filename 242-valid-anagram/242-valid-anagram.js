/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return JSON.stringify(s.split('').sort()) === JSON.stringify(t.split('').sort());
    
};