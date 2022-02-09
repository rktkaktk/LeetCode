/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  function createNewMap(str) {
    let map = new Map();
    
    for (let word of str) {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);  
      }
    }
    
    return map;
  }
  
  const mapS = createNewMap(s);
  const mapT = createNewMap(t);
  
  if (mapS.size !== mapT.size) {
    return false;  
  }
  
  return [...mapS].every(([key, val], idx) => {
    return val === mapT.get(key);
  });
};