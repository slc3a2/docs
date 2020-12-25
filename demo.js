// 伴鱼
// 请写出下面代码输出内容
// console.log('1');
// async function async1() {
//   console.log('2');
//   await console.log('3');
//   console.log('4');
// }
// setTimeout(function() {
//   console.log('5')
// }, 0)
// async1();
// new Promise(function(resolve){
//   console.log('6');
//   resolve();
// }).then(function() {
//   console.log('7')
// });
// console.log('8')
// 1 2 3 6 8 4 7 5

// 伴鱼
// 请写出下面代码输出内容
// let x = 5;
// function fn(x) {
//   return function(y) {
//     console.log(y + (++x));
//   }
// }
// let f = fn(6);
// f(7);
// console.log(x)
// 14 5

// 伴鱼
// 请写出下面代码输出内容
// var name = 'window';
// var obj = {
//   name: 'obj',
//   normal() {
//     return ()=> {
//       console.log(this.name)
//     }
//   },
//   arrow: ()=> {
//     return function(){
//       this.name=1;
//       console.log(this.name)
//     }
//   }
// }
// var obj1 = {name: 'obj1'};
// obj.normal.call(obj1)();
// obj.arrow.call(obj1)(); 

// let object = {a: 0};
// function fun(obj) {
//   obj.a = 1;
//   console.log(obj, obj === object)
//   obj = {a: 2};
//   console.log(obj, obj === object)
//   obj.b = 2;
//   console.log(obj, obj === object)
// }
// fun(object);
// console.log(object);
// {a: 1}

function fun(_str) {
  let t1 = ['{','[','('];
  let hash = {
    '{':'}',
    '[':']',
    '(':')'
  }
  let new_arr = [];
  for(let i = 0; i < _str.length; i++){
    let item = _str[i];
    if(t1.indexOf(item) !== -1){
      new_arr.push(item);
      console.log(new_arr)
    }else{
      console.log(hash[new_arr[new_arr.length - 1]], item)
      console.log(hash[new_arr[new_arr.length - 1]] === item)
      // console.log(hash[new_arr[new_arr.length - 1]], item)
      if(hash[new_arr[new_arr.length - 1]] === item){
        new_arr.pop();
      }
    }
  }
  return new_arr.length;
}

console.log(fun('{]}]'))