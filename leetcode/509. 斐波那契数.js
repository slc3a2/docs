// 509. 斐波那契数 ✅

/**
 * @param {number} n
 * @return {number}
 */
// 常规解
var fib = function(n) {
  if(n < 2) {return n}
  return fib(n-1) + fib(n-2)
};

// // dp解
var fib = function(n) {
  if(n < 2) {return n}
  // 初始化结果数组，用于缓存结果
  let res = new Array(n+1).fill(0)
  // 已知答案
  res[0] = 0
  res[1] = 1
  console.log(res)
  // 从第3项开始，计算结果，并存入结果数组
  for(let i = 2; i <= n; i++) {
    res[i] = res[i-1] + res[i-2]
  }
  return res[n]
};

 console.log(fib(2))
 console.log(fib(3))
 console.log(fib(4))