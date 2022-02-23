/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const wordArr = s.split(' ');
  let result = '';
  
  for (let i = wordArr.length - 1; i >= 0; i--) {
    if (wordArr[i] === '') {
      continue;
    }
    
    if (result === '') {
      result += wordArr[i];  
    } else {
      result += ` ${wordArr[i]}`;  
    }
  }
  
  return result;
};