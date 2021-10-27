// 1. 两数之和 ✅ 哈希表
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }

  for(let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
    let temp = target - nums[i];
    if(map.get(temp) && map.get(temp) !== i){
      return [map.get(temp), i];
    }
  }
};

twoSum([2,7,11,15], 9)
twoSum([3,2,4], 6)
twoSum([3,3], 6)

// 1. 两数之和 ✅ 暴力求解
var twoSum = function(nums, target) {
  let temp = [];
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        if(i === j){continue;}
        temp.push(i)
        temp.push(j)
      }
    }
  }
  let uni = Array.from(new Set(temp));
  return uni
};

twoSum([2,7,11,15], 9)
twoSum([3,2,4], 6)
twoSum([3,3], 6)


var twoSum = function(nums, target) {
  let t = [];
  for(let i = 0; i < nums.length; i++){
    for(let j = 1; j < nums.length - 1; i++){
      if(nums[i] + nums[j] === target){
        console.log(t.flat(Infinity))
        let flat = t.flat(Infinity)
        if(!flat.includes(nums[i]) && !flat.includes(nums[j])){
          t.push([i, j]);
        }
      }
    }
  }
  console.log(t);
  return t;
};
twoSum([2,7,11,15], 9)
twoSum([3, 2, 4], 6)
twoSum([3, 3], 9)