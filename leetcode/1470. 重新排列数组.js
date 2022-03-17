// 1470. 重新排列数组 ✅
var shuffle = function(nums, n) {
  let result = [];
  for(let i = 0; i < nums.length / 2; i++){
    result.push(nums[i])
    result.push(nums[i+n])
  }
  return result;
};
shuffle([2,5,1,3,4,7], 3)
shuffle([1,2,3,4,4,3,2,1], 4)
shuffle([1, 1, 2 ,2], 2)
