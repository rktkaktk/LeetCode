/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (target === nums[i] + nums[j]) {
            return [i, j];
        }
      }   
    }
    
    // let completemet = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     completemet = target - nums[i];
    //   if (completemet === nums[i]) {
    //     return [i, j];
    //   }
    // }
    
};