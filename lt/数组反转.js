// 练习，实现数组反转 ✅
var reverseArr1 = function(arr) {
  // 头尾交换需要length / 2次，如果是奇数最后一位不需要动
  for(let i = 0; i < arr.length / 2; i++){
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
  console.log(arr);
  return arr;
}