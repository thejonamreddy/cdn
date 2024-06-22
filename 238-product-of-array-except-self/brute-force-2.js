/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = new Array(nums.length)

  let product = 1
  let zeroCount = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++
    } else {
      product = product * nums[i]
    }
  }

  if (zeroCount > 1) {
    return res.fill(0)
  }

  for (let i = 0; i < nums.length; i++) {
    if (zeroCount === 1) {
      if (nums[i] === 0) {
        res[i] = product
      } else {
        res[i] = 0
      }
    } else {
      res[i] = product / nums[i]
    }
  }

  return res
};