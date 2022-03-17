// 198. 打家劫舍 ✅
// var rob = function(nums) {
//   let len = nums.length
//   if(len === 1) {
//     return nums[0]
//   }else if(len === 2) {
//     return Math.max(nums[0], nums[1])
//   }
//   let dp = new Array(len).fill(0)
//   dp[0] = nums[0]
//   dp[1] = Math.max(nums[0], nums[1])
//   for(let i = 2; i < len; i++) {
//     dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
//   }
//   return dp[nums.length-1]
// };
// // console.log(rob([0]))
// console.log(rob([1,2,3,1]))
// console.log(rob([2,7,9,3,1]))