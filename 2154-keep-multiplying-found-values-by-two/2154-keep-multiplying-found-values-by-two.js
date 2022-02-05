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
  
  for (let num of nums) {
    if (num === originNum) {
      originNum = originNum * 2
      return findFinalValue(nums, originNum);
    }
  }
  
  // return originNum;
};

