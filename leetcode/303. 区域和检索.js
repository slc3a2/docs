//303. 区域和检索 - 数组不可变  ✅
var NumArray = function(nums) {
  this.value = nums;
};

NumArray.prototype.sumRange = function(i, j) {
  let temp = 0;
  for(let l = i; l <= j; l++) {
    temp += this.value[l];
  }
  return temp;
};

let temp = new NumArray([-2, 0, 3, -5, 2, -1]);
let result = temp.sumRange(0, 2);
console.log(result)