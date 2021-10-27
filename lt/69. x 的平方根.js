// // 69. x 的平方根 ✅
// var mySqrt = function(x) {
//   let t = 0;
//   while(!(Math.pow(t, 2) <= x && Math.pow(t+1, 2) > x)) {
//     t++;
//   }
//   return t
//   if(x === 1 || x === 0) {
//     return x;
//   }
//   let t = 1;
//   for(let i = 1; i < x; i++) {
//     if(Math.pow(i, 2) === x) {
//       t = i;
//     }else if(Math.pow(i, 2) >= x) {
//       t = i-1;
//       break;
//     }
//   }
//   console.log(t);
//   return t;

// //   int最大值2147483647， 开方后，最大也就是46340
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

// var mySqrt = function(x) {
// let t = 0;
// while(!(Math.pow(t, 2) <= x && Math.pow(t+1, 2) > x)) {
// 	t++;
// }
// return t
// };