/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let target1 = [];
  let target2 = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    const item = nums[i];
    if (item % 2 === 0) {
      target1.push(item);
    } else {
      target2.push(item);
    }
  }
  return target1.concat(target2);
};
