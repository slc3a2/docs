// function curry(fn, args) {
//   var length = fn.length;
//   args = args || [];
//   console.log(args)
//   return function() {
//     var _args = args.slice(0)
//     var arg;
//     for (let i = 0; i < arguments.length; i++) {
//         arg = arguments[i];
//         _args.push(arg);
//     }
//     if (_args.length < length) {
//         return curry.call(this, fn, _args);
//     }
//     else {
//         return fn.apply(this, _args);
//     }
//   }
// }

// var fn = curry(function(a, b, c) {
//   console.log([a, b, c]);
// });
// function add(x, y){
//   return x+y
// }

// function curry(fn) {
//   // arguments为curry函数的所有参数类数组对象，
//   var args = Array.prototype.slice.call(arguments, 1);
//   // args为curry函数参数从第二位开始到最后的一个数组
//   return function() {
//       var newArgs = args.concat(Array.prototype.slice.call(arguments));
//       // 利用闭包把上个函数的参数args和当前函数所有参数合体 得到newArgs
//       return fn.apply(this, newArgs);
//   }
// }
// let r = curry(add);
// console.log(r(1)(2))

// function curry(fn, args = []) {
//   // 被柯里化函数的参数数量
//   var length = fn.length;
//   return function(){
//       console.log(args, [].slice.call(arguments))
//       let newArgs = args.concat([].slice.call(arguments));
//       // newArgs为arg和return函数参数合并
//       // console.log(newArgs.length, length)
//       console.log(newArgs)
//       // curry接受的参数合在一起都没有达到fn数量，那么继续curry，是不是外部有更多参数
//       if(newArgs.length < length){
//           return curry.call(this, fn, newArgs);
//       }else{
//           // 攒够了fn函数的的参数数量，那么执行他
//           return fn.apply(this, newArgs);
//       }
//   }
// }
// function multiFn(a, b, c) {
//   return a * b * c;
// }
// var multi = curry(multiFn);
// multi(2)(3)(4);
// multi(2,3,4);
// multi(2)(3,4);
// multi(2,3)(4);


// 第一版
// var curry = function (fn) {
//   var args = [].slice.call(arguments, 1);
//   console.log(arguments)
//   return function() {
//       var newArgs = args.concat([].slice.call(arguments));
//       console.log(newArgs)
//       return fn.apply(this, newArgs);
//   };
// };
  
// function add(a, b) {
//   return a + b;
// }

// var addCurry = curry(add, 1, 2);
// addCurry() // 3
//或者
// var addCurry = curry(add, 1);
// addCurry(2) // 3
// //或者
// var addCurry = curry(add);
// addCurry(1, 2) // 3
function add(x, y, z){
  // console.log(x+y+z)
  return x+y+z;
}
// function currying(fn, ...arg){
//   // 外部函数参数，转数组
//   console.log('------')
//   // console.log(arg)
//   // let arg1 = [].slice.call(arg);
//   var arg1 = arg;
//   console.log(`arg1: ${arg1}`)
//   return function(){
//     console.log(`arg1: ${arg1}`)
//     // 内部函数参数，转数组, 把所有参数合到一起
//     // console.log(arg1, [].slice.call(arguments))
//     let arg2 = arg1.concat([].slice.call(arguments));
//     // 已得到的所有参数数量，是否满足fn的形参数量，够了，执行，不够就继续柯里化
//     // console.log(arg2)
//     // console.log(arg2.length, fn.length)
//     if(arg2.length === fn.length){
//       // console.log(arg2)
//       fn(...arg2)
//     }else{
//       // console.log(arg2)
//       currying(fn, arg2)
//     }
//   }
// }
// let res = currying(add)
// let res1 = res(1);
// let res2 = res(2);
// let res3 = res(3);
// let res4 = res();

// console.log(res(1)(2)())

function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => currying(fn, ...args, ...args2);
  }
}
let res = currying(add)
console.log(res(1)(2)(3))
console.log(res(1, 2))