// 46. 全排列
/**
 * @param {number[]} nums
 * @return {number[][]}
*/
var permute = function(nums) {
  let result = []
  function dfs(s, arr) {
    console.log(arr)
    if(arr.length === 0) {
       result.push(s)
       return
    }
    let [head, ...values] = arr
    for(let i = 0, len = head.length; i < len; i++) {
      dfs(s + ',' + head[i], values)
    }
  }
  dfs('', nums)
  console.log(result)
};
let list = [
  ["热", "冷", "冰"],
  ["大", "中", "小", "超大"],
  ["重辣", "微辣"],
  ["重麻", "微麻"],
];
console.log(permaddte('', list))

