/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = new Array(nums.length)

  let product = 1
  let zeroCount = 0

  /* Calculate the product of all the elements and keep a track of number of zeroes */
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++
    } else {
      product = product * nums[i]
    }
  }

  /* If there are two or more zeros in the array, the output will always be zero for every element */
  if (zeroCount > 1) {
    return res.fill(0)
  }

  for (let i = 0; i < nums.length; i++) {
    /* 
      If there is exactly one zero in the array, the output for the position of that zero will be the product of all non-zero elements in the array. 
      For all other positions, the output will be zero since their products will involve the zero 
    */
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