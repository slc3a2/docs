// 215. 数组中的第K个最大元素 ✅
var findKthLargest = function(nums, k) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length - i; j++) {
      if(nums[j] < nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  return nums[k-1]
};

findKthLargest([3,2,1,5,6,4], 2)
findKthLargest([3,2,3,1,2,4,5,5,6], 4)

function findMissNum(arr) {
  let min = Math.min(...arr);
  while(arr.indexOf(min) !== -1) {
    min++;
  }
  console.log(min)
  return min;
}

findMissNum([1,2,3,4,6,7,8])

function findMissNum_advance(arr) {
  arr = arr.sort((a,b)=>{return a-b});
  console.log(arr)
  let start = 0;
  let end = arr.length - 1;
  function exp_start(idx) {
    return arr[idx] + 1 === arr[idx+1] ? false :arr[idx+1]
  }
  function exp_end(idx) {
    return arr[idx] - 1 === arr[idx-1] ? false : arr[idx-1]
  }
  while(start <= end || exp_start(start) || exp_end(end)) {
    start++;
    end--;
  }
  console.log(arr[start-1]+1)
  return arr[start-1]+1;
}
findMissNum_advance([1,7,3,8,6,2,4]) // 5

