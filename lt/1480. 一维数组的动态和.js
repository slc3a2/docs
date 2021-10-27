// 1480. 一维数组的动态和 ✅
var runningSum = function(nums) {
  let temp = [];
  for(let i = 0; i < nums.length; i++){
    temp[i] = nums.slice(0, i+1).reduce((a, b)=> {return a+b;})
  }
  return temp;
};
console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))