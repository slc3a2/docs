// 53. 最大子序和 ✅
var maxSubArray = function(nums) {
  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  for(let i = 1, len = nums.length; i < len; i++) { 
    if((dp[i-1] + nums[i]) > dp[i-1]) {
      if(nums[i] > dp[i-1]) {
        dp[i-1] < 0 ? dp[i] = nums[i] : dp[i] = dp[i-1] + nums[i]
      }else{
        dp[i] = dp[i-1] + nums[i]
      }
    } else {
      dp[i] = nums[i] > dp[i-1] + nums[i] ? nums[i] : dp[i-1] + nums[i]
    }
  }
  return Math.max(...dp)
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([2,-1,2,1,3,-2,1,2,1,-2])) // 8
console.log(maxSubArray([-2, 1])) // 1
console.log(maxSubArray([-2, -1])) // -1
console.log(maxSubArray([2, 1])) // 3
console.log(maxSubArray([1, 2])) // 3



