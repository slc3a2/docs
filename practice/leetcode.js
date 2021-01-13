// leetcode 题解记录

// 1480. 一维数组的动态和 ✅
// var runningSum = function(nums) {
//   let temp = [];
//   for(let i = 0; i < nums.length; i++){
//     temp[i] = nums.slice(0, i+1).reduce((a, b)=> {return a+b;})
//   }
//   return temp;
// };
// console.log(runningSum([1,2,3,4]))
// console.log(runningSum([1,1,1,1,1]))
// console.log(runningSum([3,1,2,10,1]))

// 剑指 Offer 58 - II. 左旋转字符串
// var reverseLeftWords = function(s, n) {
//   return s.replace(s.slice(0, n), '') + s.slice(0, n);
// };
// reverseLeftWords('abcdefg', 2)
// reverseLeftWords('lrloseumgh', 6)

// 1672. 最富有客户的资产总量 ✅
// var maximumWealth = function(accounts) {
//   for(let i = 0; i < accounts.length; i++){
//     let item = accounts[i];
//     accounts[i] = item.reduce((a, b)=> {return a+b;});
//   }
//   return Math.max(...accounts);
// };
// maximumWealth([[1,5],[7,3],[3,5]])
// maximumWealth([[1,2,3],[3,2,1]])

// 1431. 拥有最多糖果的孩子 ✅
// var kidsWithCandies = function(candies, extraCandies) {
//   let result = [];
//   for(let i = 0; i < candies.length; i++){
//     candies[i] =  candies[i] + extraCandies;
//     if(candies[i] === Math.max(...candies)){
//       candies[i] =  candies[i] - extraCandies;
//       result[i] = true;
//     }else{
//       candies[i] =  candies[i] - extraCandies;
//       result[i] = false;
//     }
//   }
//   return result;
// };
// kidsWithCandies([2,3,5,1,3], 3)
// kidsWithCandies([4,2,1,1,2], 1)
// kidsWithCandies([12,1,12], 10)

//1470. 重新排列数组 ✅
// var shuffle = function(nums, n) {
//   let result = [];
//   for(let i = 0; i < nums.length / 2; i++){
//     result.push(nums[i])
//     result.push(nums[i+n])
//   }
//   return result;
// };
// shuffle([2,5,1,3,4,7], 3)
// shuffle([1,2,3,4,4,3,2,1], 4)
// shuffle([1, 1, 2 ,2], 2)

// 20. 有效的括号 ✅
// var isValid = function(s) {
//   let t1 = ['{','[','('];
//   let map = {
//     '{':'}',
//     '[':']',
//     '(':')'
//   }
//   let left_arr = [];
//   let right_arr = [];
//   for(let i = 0; i < s.length; i++){
//     let item = s[i];
//     if(t1.indexOf(item) !== -1){
//       left_arr.push(item);
//     }else{
//       if(left_arr.length > 0 && map[left_arr[left_arr.length - 1]] === item){
//         left_arr.pop();
//       }else{
//         right_arr.push(item)
//       }
//     }
//   }
//   return left_arr.length === 0 && right_arr.length === 0;
// }

// 1512. 好数对的数目 ✅
// var numIdenticalPairs = function(nums) {
//   let res = [];
//   for(let i = 0; i < nums.length; i++){
//     for(let j = 1; j < nums.length; j++){
//       if(i < j && nums[i] == nums[j]){
//         res.push([i, j]);
//       }
//     }
//   }
//   return res.length;
// };
// numIdenticalPairs([1,2,3,1,1,3]);

// 1. 两数之和 ✅
// var twoSum = function(nums, target) {
//   let t = [];
//   for(let i = 0; i < nums.length; i++){
//     for(let j = 1; j < nums.length - 1; i++){
//       if(nums[i] + nums[j] === target){
//         console.log(t.flat(Infinity))
//         let flat = t.flat(Infinity)
//         if(!flat.includes(nums[i]) && !flat.includes(nums[j])){
//           t.push([i, j]);
//         }
//       }
//     }
//   }
//   console.log(t);
//   return t;
// };
// twoSum([2,7,11,15], 9)
// twoSum([3, 2, 4], 6)
// twoSum([3, 3], 9)

// 练习，实现数组反转 ✅
// var reverseArr1 = function(arr) {
//   // 头尾交换需要length / 2次，如果是奇数最后一位不需要动
//   for(let i = 0; i < arr.length / 2; i++){
//     [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
//   }
//   console.log(arr);
//   return arr;
// }

// 206. 反转链表  ✅
// var reverseList = function(head) {
//   // 将处理的链表
//   let todo_linked = head;
//   // 新的链表
//   let new_linked = null;
//   while(todo_linked) {
//     // 拿到要处理的链表下一节点
//     let next = todo_linked.next;
//     // 切换，把todo_linked下一节点设置为新链表
//     todo_linked.next = new_linked;
//     // 设置完，更新new_linked，留着下次替换使用
//     new_linked = todo_linked;
//     // 接着处理next的下一项
//     todo_linked = next;
//   }
//   return new_linked;
// };
// let temp = {
//   key: 1,
//   next: {
//     key: 2,
//     next: null
//   }
// }
// reverseList(temp)

// 165. 比较版本号  ✅
// var compareVersion = function(version1, version2) {
//   let v1 = version1.split('.');
//   let v2 = version2.split('.');
//   for(let i = 0; i < Math.max(v1.length, v2.length); i++){
//     if(v1[i] === undefined){
//       v1.push('0')
//     }
//     if(v2[i] === undefined){
//       v2.push('0')
//     }
//     v1[i] = Number(v1[i])
//     v2[i] = Number(v2[i])
//   }
//   let v1_t = Number(v1.join(''))
//   let v2_t = Number(v2.join(''))
//   if(v1_t > v2_t){
//     return 1
//   }else if(v1_t < v2_t){
//     return -1
//   }else{
//     return 0
//   }
// };
// console.log(compareVersion('1.01', '1.001'));
// console.log(compareVersion('1.0', '1.0.0'));
// console.log(compareVersion('0.1', '1.1'));

// 1. 两数之和 ✅ 暴力求解
// var twoSum = function(nums, target) {
//   let temp = [];
//   for(let i = 0; i < nums.length; i++){
//     for(let j = 0; j < nums.length; j++){
//       if(nums[i] + nums[j] === target){
//         if(i === j){continue;}
//         temp.push(i)
//         temp.push(j)
//       }
//     }
//   }
//   let uni = Array.from(new Set(temp));
//   return uni
// };

// twoSum([2,7,11,15], 9)
// twoSum([3,2,4], 6)
// twoSum([3,3], 6)


// 1. 两数之和 ✅ 哈希表
// var twoSum = function(nums, target) {
//   let map = new Map();
//   for(let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i)
//   }

//   for(let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i)
//     let temp = target - nums[i];
//     if(map.get(temp) && map.get(temp) !== i){
//       return [map.get(temp), i];
//     }
//   }
// };

// twoSum([2,7,11,15], 9)
// twoSum([3,2,4], 6)
// twoSum([3,3], 6)


// 9. 回文数 ✅  头尾比较
// var isPalindrome = function(x) {
//   let t = String(x).split('')
//   for(let i = 0; i < t.length; i++) {
//     if(t[i] !== t[t.length - 1 - i]){
//       return false;
//     }
//   }
//   return true;
// };

// isPalindrome(121);
// isPalindrome(-121);


// 9. 回文数 ✅  反转比较
// var isPalindrome = function(x) {
//   return String(x).split('').reverse().join('') === String(x)
// };

// isPalindrome(121);
// isPalindrome(-121);


