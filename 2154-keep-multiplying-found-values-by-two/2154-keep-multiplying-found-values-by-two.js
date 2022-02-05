/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
  let originNum = original;
  
  if (!nums.includes(original)) {
    return originNum;
  }
  
  for (let idx in nums) {
    if (nums[idx] === originNum) {
      originNum = originNum * 2;
      nums.splice(idx, 1);
      return findFinalValue(nums, originNum);
    }
  }
  
  // return originNum;
};

