/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = new Array(nums.length)

  /* Calculate prefix products and save to output */
  let prefixProduct = 1
  for (let i = 0; i < nums.length; i++) {
    prefixProduct = prefixProduct * nums[i]
    output[i] = prefixProduct
  }

  /* Calculate suffix products and update output array */
  let suffixProduct = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    /* 
      Don't calculate the suffixProduct here since we need the 
      suffix product to not include the current element 
    */
    if (i === 0) {
      output[i] = suffixProduct
    } else if (i === nums.length - 1) {
      output[i] = output[i - 1]
    } else {
      output[i] = output[i - 1] * suffixProduct
    }
    /* 
      Instead, do it here, 
      so that the next iteration gets the current element product 
    */
    suffixProduct = suffixProduct * nums[i]
  }

  return output
};