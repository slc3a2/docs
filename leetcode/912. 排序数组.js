// 912. 排序数组
// var sortArray = function(nums) {
//   if(nums.length <= 1) {return nums}
//   let pointIdx = Math.floor(nums.length / 2)
//   let point = nums.splice(pointIdx, 1)[0]
//   let left = [], right = []
//   for(let i = 0, len = nums.length; i < len; i++) {
//     if(nums[i] < point) {
//       left.push(nums[i])
//     }else{
//       right.push(nums[i])
//     }
//   }
//   return sortArray(left).concat(point, sortArray(right))
// }

// let arr = [4,3,2,6,7,9,1]
// console.log(sortArray(arr))