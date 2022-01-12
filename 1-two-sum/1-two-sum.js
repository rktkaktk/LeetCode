/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // nums의 number를 키로, index값을 value로 갖는 obj 만들기
    // 반복문을 돌면서 target - n 값으로 조건에 맞는값 존재여부 체크
    let hash = {}
    
    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
        
        if (hash[target - n] !== undefined) {
            return [hash[target - n], i];
        }
        hash[n] = i;
    }
    
    return [];
    
};