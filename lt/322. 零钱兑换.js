// // 322. 零钱兑换 ❌
// var coinChange = function(coins, amount) {
//   let dp = new Array(amount).fill(0)
//   dp[0] = 0
//   dp[1] = 1
//   for(let i = 2; i < amount; i++) {
//     dp[i] = 
//   }

//     // let t = coins.sort((a, b)=>{return a < b})
//     // let count = 0
//     // for(let i = 0, len = t.length; i < len; i++) {
//     //   if(t[i] <= amount) {
//     //     count++;
//     //     amount -= t[i]
//     //     if(amount <= t[i]) {
//     //       i = 0
//     //     }
//     //   }
//     // }
//     // return amount !== 0 ? -1 : count
// };
// console.log(coinChange([1, 2, 5], 11))
