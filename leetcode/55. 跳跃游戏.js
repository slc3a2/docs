/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const { length } = nums;
  let dp = new Array(length).fill(false);
  dp[0] = true;
  for (let i = 1, len = nums.length; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && nums[j] + j >= i) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[nums.length - 1];
};
