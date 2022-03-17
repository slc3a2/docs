// 7. 整数反转 ✅ 
var reverse = function(x) {
  let res = 0;
  while(x !== 0){
    res = res * 10 + x % 10;
    x = parseInt(x / 10)
  }
  if(res > (Math.pow(2, 31) - 1) || res < -(Math.pow(2, 31))) {
    res = 0;
  }
  return res;
};

reverse(123)
reverse(-123)
reverse(120)
reverse(0)