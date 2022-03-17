// 70. 爬楼梯 得到几种爬楼梯的方法 ✅
var climbStairs = function(n) {
  if(n <= 2) {return n}
  let dp = new Array(n).fill(0)
  dp[1] = 1;
  dp[2] = 2;
  for(let i = 3; i < n+1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n]
};
console.log(climbStairs(5))