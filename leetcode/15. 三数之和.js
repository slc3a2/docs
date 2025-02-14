// 15. 三数之和
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   let arr = []
//   let set = new Set()
//   for(let i = 0; i < nums.length - 2; i++) {
//     for(let j = i+1; j < nums.length; j++) {
//       for(let k = j+1; k < nums.length; k++) {
//         if(nums[i] + nums[j] + nums[k] === 0) {
//           // console.log(nums[i], nums[j], nums[k])
//           let ts1 = '' + nums[i] + nums[j] + nums[k];
//           let t = new Array(nums[i], nums[j], nums[k]);
//           if(!set.has(ts1)) {
//             arr.push(t)
//             set.add(ts1)
//             // 算出所有排列组合
//             ts2 = '' + nums[i] + nums[k] + nums[j];
//             ts3 = '' + nums[j] + nums[i] + nums[k];
//             ts4 = '' + nums[j] + nums[k] + nums[i];
//             ts5 = '' + nums[k] + nums[i] + nums[j];
//             ts6 = '' + nums[k] + nums[j] + nums[i];
//             set.add(ts2)
//             set.add(ts3)
//             set.add(ts4)
//             set.add(ts5)
//             set.add(ts6)
//           }
//         }
//       }
//     }
//   }
//   return arr
// };
// var threeSum = function(nums) {
//   nums = nums.sort((a, b)=> {return a - b})
//   let set = new Set()
//   let res = []
//   for(let i = 0, len = nums.length; i < len; i++) {
//     let l = 0
//     let r = len - 1
//     while(l <= r) {
//       if(nums[l] + nums[r] === -nums[i]) {
//         let ts1 = '' + nums[l] + nums[r] + nums[i]
//         let ts2 = '' + nums[l] + nums[i] + nums[r]
//         let ts3 = '' + nums[r] + nums[l] + nums[i]
//         let ts4 = '' + nums[r] + nums[i] + nums[l]
//         let ts5 = '' + nums[i] + nums[l] + nums[r]
//         let ts6 = '' + nums[i] + nums[r] + nums[l]
//         if(!set.has(ts1)) {
//           set.add(ts1)
//           set.add(ts2)
//           set.add(ts3)
//           set.add(ts4)
//           set.add(ts5)
//           set.add(ts6)
//           res.push(new Array(nums[l], nums[r], nums[i]))
//         }
//       }
//       l++
//       r--
//     }
//   }
//   return res
// }
// nums = [-1,0,1,2,-1,-4]
// nums = [-10,-7,-3,-9,-8,-9,-5,6,0,6,4,-15,-12,3,-12,-10,-5,-5,2,-4,13,8,-9,6,-11,11,3,-13,-3,14,-9,2,14,-5,8,-9,-7,-12,5,1,2,-6,1,5,4,-4,3,7,-2,12,10,-3,6,-14,-12,10,12,7,12,-14,-2,11,4,-10,13,-11,-4,-8,-15,-14,8,-6,-12,-14,6,7,-3,-14,-1,11,14,-6,-15,5,-13,-12,0,14,2,-11,-14,8,-15,-3,13,14,-7,-14,13,-15,10,-2,-14,13]
// console.log(threeSum(nums).length)
// var threeSum2 = function(nums) {
//   const result = []
//   nums.sort((a,b) => a-b)
//   for(let i = 0;i<nums.length;i++) {
//       // 跳过重复数字
//       if (i && nums[i] === nums[i-1]) continue
//       let left = i+1
//       let right = nums.length-1
//       while(left < right) {
//           const sum = nums[i] + nums[left] + nums[right]
//           if (sum > 0) {
//               right--
//           } else if(sum < 0) {
//               left++
//           } else {
//               result.push([nums[i], nums[left++], nums[right--]])
//               // 跳过重复数字
//               while(nums[left] === nums[left-1]) {
//                   left++
//               }
//               // 跳过重复数字
//               while(nums[right] ===  nums[right+1]) {
//                   right--
//               }
//           }
//       }
//   }
//   return result
// };
// let r1 = threeSum(nums)
// let r2 = threeSum2(nums)
// console.log(r1.length)
// console.log('------')
// console.log(r2.length)
// for(let i = 0, len = r1.length; i < len; i++) {
//   r1[i] = r1[i].join('')
// }
// for(let i = 0, len = r2.length; i < len; i++) {
//   r2[i] = r2[i].join('')
// }
// // console.log(r1, r2)–
// for(let i = 0, len = r2.length; i < len; i++) {
//   if(r1.indexOf(r2[i]) === -1) {
//     // console.log(r2[i])
//   }
// }

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (arr) {
//   let nums = Array.from([...new Set(arr)]);
//   const r = [];
//   for (let i = 0, len = nums.length; i < len; i++) {
//     const item = nums[i];
//     for (let j = i + 1, len = nums.length; j < len; j++) {
//       const item2 = nums[j];
//       for (let k = j + 1, len = nums.length; k < len; k++) {
//         const item3 = nums[k];
//         console.log(item, item2, item3);
//         const isOk =
//           item !== undefined && item2 !== undefined && item3 !== undefined;
//         if (isOk && item + item2 + item3 === 0) r.push([item, item2, item3]);
//       }
//     }
//   }
//   return r;
// };

// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0]));

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (arr) {
//   let t = arr.sort((a, b) => a - b);
//   const result = [];
//   for (let i = 0, len = arr.length; i < len; i++) {}
//   return r;
// };

// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0]));

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (arr) {
//   let nums = Array.from([...new Set(arr)]);
//   const r = [];
//   for (let i = 0, len = nums.length; i < len; i++) {
//     const item = nums[i];
//     for (let j = i + 1, len = nums.length; j < len; j++) {
//       const item2 = nums[j];
//       for (let k = j + 1, len = nums.length; k < len; k++) {
//         const item3 = nums[k];
//         console.log(item, item2, item3);
//         const isOk =
//           item !== undefined && item2 !== undefined && item3 !== undefined;
//         if (isOk && item + item2 + item3 === 0) r.push([item, item2, item3]);
//       }
//     }
//   }
//   return r;
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  // 首先对数组进行排序
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  // 遍历数组，固定一个数
  for (let i = 0; i < n - 2; i++) {
    // 如果当前数大于 0，由于数组已排序，后面的数也都大于 0，不可能再找到和为 0 的三元组
    if (nums[i] > 0) break;

    // 跳过重复的数
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 定义左右指针
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // 找到和为 0 的三元组，添加到结果数组中
        result.push([nums[i], nums[left], nums[right]]);

        // 跳过重复的数
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // 移动指针
        left++;
        right--;
      } else if (sum < 0) {
        // 和小于 0，左指针右移
        left++;
      } else {
        // 和大于 0，右指针左移
        right--;
      }
    }
  }

  return result;
}
