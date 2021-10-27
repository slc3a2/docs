// 1512. 好数对的数目 ✅
var numIdenticalPairs = function(nums) {
  let res = [];
  for(let i = 0; i < nums.length; i++){
    for(let j = 1; j < nums.length; j++){
      if(i < j && nums[i] == nums[j]){
        res.push([i, j]);
      }
    }
  }
  return res.length;
};
numIdenticalPairs([1,2,3,1,1,3]);