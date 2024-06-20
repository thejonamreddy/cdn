/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = new Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    let product = 1
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product = product * nums[j]
      }
      res[i] = product
    }
  }

  return res
};