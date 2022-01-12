/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 문자를 정렬해서 같은 문자가 있는지 체킹
    // 같은 문자끼리 그룹핑
    const obj = {};
    
    for (let str of strs) {
        const letter = str.split('').sort().join('');
        
        // 있다면 
        if (obj[letter]) {
            obj[letter].push(str);
        } else {
            obj[letter] = [str];
        }
    }
    
    return Object.values(obj);    
};