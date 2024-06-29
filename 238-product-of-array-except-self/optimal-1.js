/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefixArr = new Array(nums.length)
  const suffixArr = new Array(nums.length)
  const output = new Array(nums.length)

  /* Calculate prefix products */
  let prefixProduct = 1
  for (let i = 0; i < nums.length; i++) {
    prefixProduct = prefixProduct * nums[i]
    prefixArr[i] = prefixProduct
  }

  /* Calculate suffix products */
  let suffixProduct = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    suffixProduct = suffixProduct * nums[i]
    /* Note that we are adding from the end here */
    suffixArr[i] = suffixProduct
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      output[i] = suffixArr[i + 1]
    } else if (i === nums.length - 1) {
      output[i] = prefixArr[i - 1]
    } else {
      output[i] = prefixArr[i - 1] * suffixArr[i + 1]
    }
  }

  console.log(prefixArr)
  console.log(suffixArr)

  return output
};