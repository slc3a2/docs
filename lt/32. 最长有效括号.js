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

