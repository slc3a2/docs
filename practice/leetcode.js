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

// 面试题 01.04. 回文排列 ✅ 
// var canPermutePalindrome = function(s) {
//   if(s.length === 1){
//     return true;
//   }
//   let map = new Map();
//   for(let i = 0 ; i < s.length; i++) {
//     if(!map.has(s[i])) { map.set(s[i], 0) }
//     if(map.has(s[i])) {
//       let temp = map.get(s[i]);
//       map.set(s[i], ++temp);
//     }
//   }
//   let single = 0;
//   for(let [key, value] of map){
//     if(value % 2 !== 0){
//       single++;
//     }
//   }
//   let res;
//   if((s.length % 2 === 0 && single === 0) || (s.length % 2 !== 0 && single === 1)) {
//     res = true;
//   } else {
//     res = false;
//   }
//   return res;
// };

// canPermutePalindrome('tactcoa');
// canPermutePalindrome('aa');
// canPermutePalindrome("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc")
// canPermutePalindrome('aaa');


// 3. 无重复字符的最长子串 ❌
// var lengthOfLongestSubstring = function(s) {
//   let arr = [];
//   let max = 0;
//   for(let i = 0; i < s.length; i++) {
//       if(arr.indexOf(s[i]) !== -1){
//         arr.splice(0, arr.indexOf(s[i])+1);
//       }
//       arr.push(s.charAt(i))
//       max = Math.max(arr.length, max) 
//   }
//   console.log(max)
//   return max
// };
// lengthOfLongestSubstring('abcabcbb')
// lengthOfLongestSubstring('bbbbb')
// lengthOfLongestSubstring('pwwkew')
// lengthOfLongestSubstring("abcabcbb")
// lengthOfLongestSubstring("")
// lengthOfLongestSubstring(" ")
// lengthOfLongestSubstring("au")
// lengthOfLongestSubstring("aab")

// 7. 整数反转 ✅ 
// var reverse = function(x) {
//   let res = 0;
//   while(x !== 0){
//     res = res * 10 + x % 10;
//     x = parseInt(x / 10)
//   }
//   if(res > (Math.pow(2, 31) - 1) || res < -(Math.pow(2, 31))) {
//     res = 0;
//   }
//   return res;
// };

// reverse(123)
// reverse(-123)
// reverse(120)
// reverse(0)

//1556. 千位分隔数 ✅ 
// var thousandSeparator = function(n) {
//   let temp = String(n);
//   let res = temp;
//   let i = temp.length - 3;
//   while(i > 0) {
//     res = res.slice(0, i) + '.' + res.slice(i)
//     i -= 3;
//   }
//   return res;
// };

// // thousandSeparator(987)
// thousandSeparator(12345678)

// 13. 罗马数字转整数 ✅
// var romanToInt = function(num) {
//   let o = [
//     [1000, 'M'],
//     [900, 'CM'],
//     [500, 'D'],
//     [400, 'CD'],
//     [100, 'C'],
//     [90, 'XC'],
//     [50, 'L'],
//     [40, 'XL'],
//     [10, 'X'],
//     [9, 'IX'],
//     [5, 'V'],
//     [4, 'IV'],
//     [1, 'I']
//   ];
//   let map = new Map(o);
//   let res = ''
//   while(num !== 0) {
//     for(let i of map) {
//       if(num >= i[0]) {
//         num -= i[0];
//         res += i[1];
//         break;
//       }
//     }
//   }
//   return res
// }

// romanToInt(1994)
// romanToInt(3)
// romanToInt(20)

// 4. 寻找两个正序数组的中位数 ❌ leetcode[1,3] [2]用例和本地结果不同
var findMedianSortedArrays = function(nums1, nums2) {
  let temp = nums1.concat(nums2).sort((a, b)=> {return a - b});
  let len = temp.length;
  if(len % 2 === 1) {
    return temp[len / 2 - 0.5]
  } else {
    let prev = temp[len / 2 - 1];
    let next = temp[len / 2];
    return (prev + next) / 2
  }
};

// nums1 = [1, 3], nums2 = [2]
// console.log(findMedianSortedArrays(nums1, nums2))

// 14. 最长公共前缀 ✅
// var longestCommonPrefix = function(strs) {
//   let resStr = '';
//   // 找到最长一项，来循环这项
//   let maxItem = strs.reduce((a, b)=> {
//     return a.length > b.length ? a : b;
//   }, [''])
//   if(maxItem.length === 1 && maxItem[0] === '') {
//     console.log('')
//     return ''
//   }
//   for(let i = 0; i < maxItem.length; i++) {
//     let product = maxItem.charAt(i);
//     let count = 0;
//     for(let j = 0; j < strs.length; j++) {
//       if(strs[j][i] === product) {
//         count++;
//       }
//     }
//     // strs中每一项都符合要求
//     if(count === strs.length) {
//       resStr = resStr + product;
//       // 如果不连续，则删除最后一项
//       if(maxItem.indexOf(resStr) === -1) {
//         resStr = resStr.substring(0, resStr.length -1);
//       }
//     }else{
//       break;
//     }
//   }
//   return resStr;
// }
// longestCommonPrefix(["flower","flow","flight"])
// // longestCommonPrefix(["dog","racecar","car"])
// // longestCommonPrefix(["dog","racecar","car"])
// longestCommonPrefix([""])
// // longestCommonPrefix([])
// // longestCommonPrefix(['a'])
// // longestCommonPrefix(['',''])
// longestCommonPrefix(["cir","car"])
// longestCommonPrefix(["aca","cba"])


// 面试题 08.06. 汉诺塔问题 ❌
// var hanota = function(A, B, C) {
//   function move(A, B, C, size) {
//     if()
//   }
// };
 
// 42. 接雨水 ✅
// 从左边第一个节点开始遍历，分别找到符合条件的他的前一项和后一项，要求是满足:前一项 > 当前值 < 后一项，如不满足，前一项继续向前移动一位，后一项向后移动一位，
// 如果有符合条件的组合下：如果left值大于right值，所有在left和right之间的值需要等于right的值，否则left和right之间的值都等于left的值，然后每次变化，用count去记录，最后返回count，count为结果
// var trap = function(height) {
//   let basic = JSON.parse(JSON.stringify(height));
//   let count = 0;
//   for(let i = 0; i < height.length; i++) {
//     let item = height[i];
//     let left, right;
//     let startIdx, endIdx
//     for(let j = i; j >= 0; j--) {
//       if(height[j] > item) {
//         left = height[j]
//         startIdx = j;
//         break;
//       }
//     }
//     for(let l = i; l < height.length; l++) {
//       if(height[l] > item) {
//         right = height[l]
//         endIdx = l;
//         break;
//       }
//     }
//     if(typeof(right) !== 'undefined' && typeof(left) !== 'undefined' && typeof(item) !== 'undefined') {
//       let temp = 0;
//       if(left > right) {
//         temp = right;
//       } else {
//         temp = left;
//       }
//       if(temp !== 0) {
//         for(let ii = startIdx+1; ii < endIdx; ii++) {
//           count += temp - height[ii];
//           height[ii] = temp;
//         }
//       }
//     }
//   }
//   console.log(`柱子排列为:${basic} 的情况下，这样结构最大可接${count}滴雨水，接满水后的结构为: ${height}`)
//   return count;
// };

// trap([4,3,2,1,2,3,4])
// trap([1,2,3,4,5,2,3,1,2,3,4,5,5])
// trap([0,1,0,2,1,0,1,3,2,1,2,1])

// let l1 = {
//   val: 2,
//   next:  {
//     val: 4,
//     next: {
//       val: 3,
//       next: null
//     }
//   }
// }
// let l1 = {
// }

// let l2 = {
//   val: 5,
//   next:  {
//     val: 6,
//     next: {
//       val: 4,
//       next: null
//     }
//   }
// }
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

// // 2. 两数相加 ❌
// var addTwoNumbers = function(l1, l2) {
//   let t1 = ''
//   let t2 = ''
//   while(l1) {
//     t1 += l1.val
//     l1 = l1.next;
//   }
//   while(l2) {
//     t2 += l2.val
//     l2 = l2.next;
//   }
//   t2 = t2.split('').reverse().join('')
//   t1 = t1.split('').reverse().join('')
//   let t = (BigInt(t1) + BigInt(t2)).toString();
//   t = t.split('').reverse().join('')
//   let linked = new Array(t.length).fill(0);
//   for(let i = 0; i < t.length; i++) {
//     linked[i] = new ListNode(t[i]);
//   }
//   for(let i = 0; i < linked.length; i++) {
//     linked[i].next = linked[i+1] || null;
//   }
//   return linked[0]
// };
// console.log(addTwoNumbers(l1, l2))

//303. 区域和检索 - 数组不可变  ✅
// var NumArray = function(nums) {
//   this.value = nums;
// };

// NumArray.prototype.sumRange = function(i, j) {
//   let temp = 0;
//   for(let l = i; l <= j; l++) {
//     temp += this.value[l];
//   }
//   return temp;
// };

// let temp = new NumArray([-2, 0, 3, -5, 2, -1]);
// let result = temp.sumRange(0, 2);
// console.log(result)

// 11. 盛最多水的容器  ✅
// var maxArea = function(height) {
//   let len = height.length;
//   let mark = 0;
//   for(let i = 0; i < len; i++) {
//     for(let j = i + 1; j < len; j++) {
//       let x = (j+1) - (i+1);
//       let y = height[i] > height[j] ? height[j] : height[i];
//       x*y > mark ? mark = x*y : null;
//     }
//   }
//   return mark;
// };

// maxArea([4,3,2,1,4])
// maxArea([1,8,6,2,5,4,8,3,7])

// 43. 字符串相乘
// let multiply = function(num1, num2) {
//   if(num1 === '0' || num2 === '0') return "0"
//   // 用于保存计算结果
//   let res = []
//   // 从个位数开始逐位相乘
//   for(let i = 0 ; i < num1.length; i++){
//     // console.log(i)
//     // console.log(num1.charAt(i));
//     // console.log(+num1[num1.length-1-i])
//     let tmp1 = +num1[num1.length-1-i]
//     console.log(tmp1);
//       // num1 尾元素
//       // let tmp1 = +num1[num1.length-1-i]
//       // for(let j = 0; j < num2.length; j++){
//       //     // num2尾元素
//       //     let tmp2 = +num2[num2.length-1-j]
//       //     // 判断结果集索引位置是否有值
//       //     let pos = res[i+j] ? res[i+j]+tmp1*tmp2 : tmp1*tmp2
//       //     // 赋值给当前索引位置
//       //     res[i+j] = pos%10
//       //     // 是否进位 这样简化res去除不必要的"0"
//       //     pos >=10 && (res[i+j+1]=res[i+j+1] ? res[i+j+1]+Math.floor(pos/10) : Math.floor(pos/10));
//       // }
//   }
//   return res.reverse().join("");
// }
// let num1 = "123"; let num2 = "456";
// multiply(num1, num2)

// 26. 删除排序数组中的重复项 ✅
// var removeDuplicates = function(nums) {
//   for(let i = 0; i < nums.length - 1; i++) {
//     if(nums[i] === nums[i+1]) {
//       nums.splice(i,1)
//       i--;
//     }
//   }
//   return nums.length
// };
// removeDuplicates([0,0,0,1,2,3])
// removeDuplicates([0,0,1,1,1,2,2,3,3,4])

// 5. 最长回文子串, 中心扩散法   ✅
// var longestPalindrome = function(s) {
//   let mark = '';
//   if(s.length === 1 || s.length === 0 || s.split('').reverse().join('') === s){return s}
//   if(s.length === 2){return s[0] === s[1] ? s : s[0]}
//   let len = s.length;
//   for(let i = 0; i < len; i++) {
//     // 满足s[i] === s[i+1]为双中心，否则为单中心
//     if(s[i] === s[i+1]) {
//       let left = i-1;
//       let right = s[i] === s[i+1] ? i+2 : i+1;
//       while(left >= 0 && right < len && s[left] === s[right]) {
//         left--;
//         right++;
//       }
//       // left+1是因为left最小值为0，由于while允许0进入，所以left最小值是-1，需要加1再截取
//       let result = s.slice(left+1, right);
//       if(mark.length < result.length) {
//         mark = result;
//       }
//     }
//     let left = i-1;
//     let right = i+1;
//     while(left >= 0 && right < len && s[left] === s[right]) {
//       left--;
//       right++;
//     }
//     let result = s.slice(left+1, right);
//     if(mark.length < result.length) {
//       mark = result;
//     }
//   }
//   return mark;
// };
// longestPalindrome('babad')
// longestPalindrome('cbbd')
// longestPalindrome('ccc')
// longestPalindrome('sooosg')
// longestPalindrome("cbbd")
// longestPalindrome("adam")
// longestPalindrome('babad')
// console.log(longestPalindrome('babad'))
// longestPalindrome("azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc")

// let arr = [
//   {
//     id:1,
//     no: '131',
//     count: 0
//   },
//   {
//     id:1,
//     no: '121',
//     count: 0
//   },
//   {
//     id:4,
//     no: '13',
//     count: 0
//   }
// ]
// console.log('转换前')
// console.log(arr)
// function trans(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     let curItem = arr[i];
//     for(let j = i + 1; j < arr.length - 1; j++) {
//       let diffItem = arr[j];
//       if(curItem.id === diffItem.id) {
//         curItem['no'] = curItem['no'].split();
//         curItem['no'].push(diffItem['no'])
//         curItem['count']++;
//         arr[j] = null;
//       }
//     }
//   }
//   arr = arr.filter((i)=>{return i});
//   console.log('转换后')
//   console.log(arr)
//   return arr;
// }
// trans(arr)
// 69. x 的平方根 ✅
// var mySqrt = function(x) {
//   let t = 0;
//   while(!(Math.pow(t, 2) <= x && Math.pow(t+1, 2) > x)) {
//     t++;
//   }
//   return t
  // if(x === 1 || x === 0) {
  //   return x;
  // }
  // let t = 1;
  // for(let i = 1; i < x; i++) {
  //   if(Math.pow(i, 2) === x) {
  //     t = i;
  //   }else if(Math.pow(i, 2) >= x) {
  //     t = i-1;
  //     break;
  //   }
  // }
  // console.log(t);
  // return t;

  // int最大值2147483647， 开方后，最大也就是46340
//   let t = 46340;
//   if(t * t >= x) {
//     t = parseInt(t / 2);
//   }else{
//     t = parseInt(t / 2) + parseInt((t - t / 2) / 2)
//   }
//   console.log(t)
//   console.log((t - 1) * (t - 1) <= x)
//   console.log((t + 1) * (t + 1) >= x)
//   let res = 
//   while(!check(t) && t !== 0) {
//     if((t/2) * (t/2) > x) {
//       t = parseInt(t / 2);
//     }else{
//       t = parseInt(t / 4 * 3);
//     }
//     console.log(t)
//   }
//   console.log(t)
//   console.log(check(2))
//   function check(t) {
//     if(Math.pow(t, 2) === x) {
//       return true;
//     }else{
//       return Math.pow(t-1, 2) <= x && Math.pow(t+1, 2) > x;
//     }
// };
// mySqrt(8)

// 数字转中文 
// function toChineseNumber(n) {
//   let res = '';
//   let map1 = {
//     '100000000': '亿',
//     '10000000': '千万',
//     '1000000': '百万',
//     '100000': '十万',
//     '10000': '万',
//     '1000': '千',
//     '100': '百',
//     '10': '十',
//     '1': ''
//   }
//   let map2 = {
//     '9': '九',
//     '8': '八',
//     '7': '七',
//     '6': '六',
//     '5': '五',
//     '4': '四',
//     '3': '三',
//     '2': '二',
//     '1': '一'
//   }
//   let keys1 = Object.keys(map1).reverse();
//   while(n > 0) {
//     for(let i = 0; i < keys1.length; i++) {
//       let item = keys1[i];
//       if(n - item >= 0) {
//         let head = parseInt(n / item);
//         res += map2[head] + map1[item]
//         n = n - head * item;
//       }else{
//         res.charAt(res.length - 1) !== '零' ? res += '零' : null;
//       }
//     }
//   }
//   console.log(res)
//   return res;
// }
// toChineseNumber(100900911)


// 取硬币 ✅
// function getCoin(coinArr, amount, res = []){
//   for(let i = coinArr.length - 1; i >= 0; i--) {
//     let item = coinArr[i];
//     // console.log(amount, item)
//     if(amount - item >= 0) {
//       res.push(item)
//       getCoin(coinArr, amount - item, res)
//       break;
//     }
//   }
//   if(amount === 0) {
//     console.log(res)
//     return res
//   }else{
//     console.log('无法整除')
//     return false
//   }
//   console.log(res)
//   // return res
// }
// getCoin([1,2,5], 11) // 5 5 1
// getCoin([1,2,5], 36) // 5 5 5 5 5 5 5 1

// 215. 数组中的第K个最大元素 ✅
// var findKthLargest = function(nums, k) {
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = 0; j < nums.length - i; j++) {
//       if(nums[j] < nums[j+1]) {
//         [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
//       }
//     }
//   }
//   return nums[k-1]
// };

// findKthLargest([3,2,1,5,6,4], 2)
// findKthLargest([3,2,3,1,2,4,5,5,6], 4)

// function findMissNum(arr) {
//   let min = Math.min(...arr);
//   while(arr.indexOf(min) !== -1) {
//     min++;
//   }
//   console.log(min)
//   return min;
// }

// findMissNum([1,2,3,4,6,7,8])

// function findMissNum_advance(arr) {
//   arr = arr.sort((a,b)=>{return a-b});
//   console.log(arr)
//   let start = 0;
//   let end = arr.length - 1;
//   function exp_start(idx) {
//     return arr[idx] + 1 === arr[idx+1] ? false :arr[idx+1]
//   }
//   function exp_end(idx) {
//     return arr[idx] - 1 === arr[idx-1] ? false : arr[idx-1]
//   }
//   while(start <= end || exp_start(start) || exp_end(end)) {
//     start++;
//     end--;
//   }
//   console.log(arr[start-1]+1)
//   return arr[start-1]+1;
// }
// findMissNum_advance([1,7,3,8,6,2,4]) // 5

// 200. 岛屿数量 dfs  ✅
// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
//  var numIslands = function(grid) {
//   let count = 0;
//   let len = grid.length;
//   for(let i = 0; i < len; i++) {
//     let len = grid[i].length;
//     for(let j = 0; j < len; j++) {
//       if(grid[i][j] === '1') {
//         count++;
//         sinking(i, j);
//       }
//     }
//   }
//   // 沉岛，1 => 0，防止重复统计
//   function sinking(i, j) {
//     if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0') {
//       return;
//     }
//     grid[i][j] = '0';
//     // 遍历四个方向
//     sinking(i, j + 1) // 右
//     sinking(i, j - 1) // 左
//     sinking(i + 1, j) // 下
//     sinking(i - 1, j) // 上
//   }
//   return count;
// };

// let grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]

// numIslands(grid);

// 509. 斐波那契数 ✅

/**
 * @param {number} n
 * @return {number}
 */
// 常规解
// var fib = function(n) {
//   if(n < 2) {return n}
//   return fib(n-1) + fib(n-2)
// };

// // dp解
// var fib = function(n) {
//   if(n < 2) {return n}
//   // 初始化结果数组，用于缓存结果
//   let res = new Array(n+1).fill(0)
//   // 已知答案
//   res[0] = 0
//   res[1] = 1
//   console.log(res)
//   // 从第3项开始，计算结果，并存入结果数组
//   for(let i = 2; i <= n; i++) {
//     res[i] = res[i-1] + res[i-2]
//   }
//   return res[n]
// };

//  console.log(fib(2))
//  console.log(fib(3))
//  console.log(fib(4))


// 70. 爬楼梯 得到几种爬楼梯的方法 ✅
// var climbStairs = function(n) {
//   if(n <= 2) {return n}
//   let dp = new Array(n).fill(0)
//   dp[1] = 1;
//   dp[2] = 2;
//   for(let i = 3; i < n+1; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n]
// };
// console.log(climbStairs(5))

// 198. 打家劫舍 ✅
// var rob = function(nums) {
//   let len = nums.length
//   if(len === 1) {
//     return nums[0]
//   }else if(len === 2) {
//     return Math.max(nums[0], nums[1])
//   }
//   let dp = new Array(len).fill(0)
//   dp[0] = nums[0]
//   dp[1] = Math.max(nums[0], nums[1])
//   for(let i = 2; i < len; i++) {
//     dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
//   }
//   return dp[nums.length-1]
// };
// // console.log(rob([0]))
// console.log(rob([1,2,3,1]))
// console.log(rob([2,7,9,3,1]))

// 32. 最长有效括号
// var longestValidParentheses = function(s) {
//   let len = s.length
//   if(len === 0 || len === 1) {
//     return 0
//   }else if(len === 2) {
//     return s.charAt(0) + s.charAt(1) === '()' ? 2 : 0
//   }
//   let dp = new Array(len).fill(0)
//   // dp[0] = 0
//   // dp[1] = s.charAt(0) + s.charAt(1) === '()' ? 2 : 0
//   // console.log(dp)
//   for(let i = 0; i < len; i++) {
//     let t = 0
//     let jump_step = 0
//     // if(s.charAt(i-1) + s.charAt(i+1) === '()') {
//     //   t = 2
//     // }else 
//     if(s.charAt(i) === '(') {
//       // 从i开始向后对比
//       let left_distance = 1
//       let right_distance = 0
//       for(let j = i+1; j < len; j++) {
//         if(s.charAt(j) === '(') {
//           // 匹配 ')(' 情况下截止
//           if(right_distance > 0) {
//             break;
//           }
//           left_distance++
//           // jump_step++
//         }else{
//           right_distance++
//           // jump_step++
//         }
//         jump_step = j;
//       }
//       // console.log(`left:${left_distance}`)
//       // console.log(`right:${right_distance}`)
//       if(right_distance > 0) {
//         t = Math.min(left_distance, right_distance) * 2;
//         // jump_step = jump_step - (Math.max(left_distance, right_distance) - Math.min(left_distance, right_distance))
//         // console.log(t)
//         // if(left_distance > right_distance) {
//         //   t = right_distance * 2;
//         // } else {
//         //   t = left_distance * 2;
//         // }
//       }
//     }
//     // console.log(`res:${t}`)
//     // console.log(t+(dp[jump_step-1] || 0), (dp[jump_step-1] || 0))
//     // console.log(Math.max(t+(dp[jump_step-1] || 0), (dp[jump_step-1] || 0)))
//     // console.log(jump_step)
//     // console.log(jump_step)
//     // if(jump_step === len - 1) {
//     //   console.log(111)
//     //   jump_step -= 1;
//     // }
//     console.log(jump_step)
//     dp[jump_step] = Math.max(t+(dp[jump_step-1] || 0), (dp[jump_step-1] || 0));
//     // for(let k = jump_step; k < dp[jump_step]; k--) {
//     //   dp[k] = dp[jump_step];
//     // }
//     // console.log(i, dp[jump_step])
//     // for(let i = 0; i < dp[jump_step]; i++) {
//     //   console.log(i, dp[jump_step]);
//     //   dp[jump_step-i] = dp[jump_step];
//     // }
//     // console.log(i)
//     // console.log(t+(dp[i] || 0), (dp[i] || 0))
//     // dp[i+1] = Math.max(t+(dp[i] || 0), (dp[i] || 0))
//     // i = jump_step + 1;
//   }
//   // for(let i = 0; i < dp.length; i++) {
//   //   if(dp[i] === 2 && dp[i+2] && dp[i+2] === 2) {
//   //     dp[i+1] = 2;
//   //   }
//   // }
//   console.log(dp)
//   return Math.max(...dp);
// }
// 32. 最长有效括号 ✅ 这道题真是解了好几天，今天终于过了，爽啊。 21/04/21 19:05
// var longestValidParentheses = function(s) {
//   s = s.split('');
//   let map = new Map([['(',')']])
//   let contrast = [], count = 0, max = 0
//   for(let i = 0; i < s.length; i++) {
//     let item = s[i]
//     let last_char = contrast[contrast.length - 1] ? contrast[contrast.length - 1].val : null
//     if(map.get(last_char) === item) {
//       let delete_item = contrast.pop()
//       s[delete_item.idx] = 1
//       s[i] = 1
//     }else{
//       s[i] = 0
//       contrast.push({
//         val: item,
//         idx: i
//       })
//     }
//   }
//   for(let i = 0; i < s.length; i++) {
//     if(s[i] === 1) {
//       count++
//       count > max && (max = count)
//     } else {
//       count = 0
//     }
//   }
//   return max
// }
// console.log(longestValidParentheses("(()"))
// console.log(longestValidParentheses("()(()"))
// console.log(longestValidParentheses("(()"))
// console.log(longestValidParentheses(")()())"))
// console.log(longestValidParentheses("()()"))
// console.log(longestValidParentheses("()(())"))

// 141. 环形链表 ✅
// var hasCycle = function(head) {
//   let set = new Set()
//   let res = false
//   while(head) {
//     if(set.has(head)){
//       res = true
//       break
//     }
//     set.add(head)
//     head = head.next
//   }
//   return res
// };

// 118. 杨辉三角  ✅
// var generate = function(numRows) {
//   let arr = new Array(numRows);
//   for(let i = 0; i < numRows; i++) {
//     if(i === 0) {
//       arr[0] = [1]
//       continue;
//     }
//     let t = [];
//     // 通过上一项计算当前项的值
//     for(let j = 0; j < arr[i-1].length+1; j++) {
//       t[j] =  (arr[i-1][j-1] || 0) + (arr[i-1][j] || 0);
//       arr[i] = t
//     }
//   }
//   return arr
// };
// generate(5);

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
var threeSum = function(nums) {
  nums = nums.sort((a, b)=> {return a - b})
  let set = new Set()
  let res = []
  for(let i = 0, len = nums.length; i < len; i++) {
    let l = 0
    let r = len - 1
    while(l <= r) {
      if(nums[l] + nums[r] === -nums[i]) {
        let ts1 = '' + nums[l] + nums[r] + nums[i]
        let ts2 = '' + nums[l] + nums[i] + nums[r]
        let ts3 = '' + nums[r] + nums[l] + nums[i]
        let ts4 = '' + nums[r] + nums[i] + nums[l]
        let ts5 = '' + nums[i] + nums[l] + nums[r]
        let ts6 = '' + nums[i] + nums[r] + nums[l]
        if(!set.has(ts1)) {
          set.add(ts1)
          set.add(ts2)
          set.add(ts3)
          set.add(ts4)
          set.add(ts5)
          set.add(ts6)
          res.push(new Array(nums[l], nums[r], nums[i]))
        }
      }
      l++
      r--
    }
  }
  return res
}
nums = [-1,0,1,2,-1,-4]
nums = [-10,-7,-3,-9,-8,-9,-5,6,0,6,4,-15,-12,3,-12,-10,-5,-5,2,-4,13,8,-9,6,-11,11,3,-13,-3,14,-9,2,14,-5,8,-9,-7,-12,5,1,2,-6,1,5,4,-4,3,7,-2,12,10,-3,6,-14,-12,10,12,7,12,-14,-2,11,4,-10,13,-11,-4,-8,-15,-14,8,-6,-12,-14,6,7,-3,-14,-1,11,14,-6,-15,5,-13,-12,0,14,2,-11,-14,8,-15,-3,13,14,-7,-14,13,-15,10,-2,-14,13]
console.log(threeSum(nums).length)
var threeSum2 = function(nums) {
  const result = []
  nums.sort((a,b) => a-b)
  for(let i = 0;i<nums.length;i++) {
      // 跳过重复数字
      if (i && nums[i] === nums[i-1]) continue
      let left = i+1
      let right = nums.length-1
      while(left < right) {
          const sum = nums[i] + nums[left] + nums[right]
          if (sum > 0) {
              right--
          } else if(sum < 0) {
              left++
          } else {
              result.push([nums[i], nums[left++], nums[right--]])
              // 跳过重复数字
              while(nums[left] === nums[left-1]) {
                  left++
              }
              // 跳过重复数字
              while(nums[right] ===  nums[right+1]) {
                  right--
              }
          }
      }
  }
  return result
};
let r1 = threeSum(nums)
let r2 = threeSum2(nums)
console.log(r1.length)
console.log('------')
console.log(r2.length)
for(let i = 0, len = r1.length; i < len; i++) {
  r1[i] = r1[i].join('')
}
for(let i = 0, len = r2.length; i < len; i++) {
  r2[i] = r2[i].join('')
}
// console.log(r1, r2)–
for(let i = 0, len = r2.length; i < len; i++) {
  if(r1.indexOf(r2[i]) === -1) {
    // console.log(r2[i])
  }
}
// 415. 字符串相加
let addStrings = function(a, b) {
  let res = []
  let temp = 0
  if(a.length > b.length) {
    let t = a.length - b.length
    for(let i = 0; i < t; i++) {
      b = '0' + b
    }
  } else {
    let t = b.length - a.length
    for(let i = 0; i < t; i++) {
      a = '0' + a
    }
  }
  for(let len = Math.max(a.length, b.length) - 1; len >= 0; len--) {
      let i = len
      let t_a = Number(a.charAt(i) || 0)
      let t_b = Number(b.charAt(i) || 0)
      // console.log(t_a , t_b , temp)
      let count = String(t_a + t_b + temp)
      temp = 0
      if(count.length > 1) {
        temp = Number(count.charAt(0))
        res.push(count.charAt(1))
      } else {
        res.push(count)
      }
  }
  if(temp !== 0) {
    res.push(temp)
  }
  return res.reverse().join('')
}