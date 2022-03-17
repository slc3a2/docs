// 1556. 千位分隔数 ✅ 
var thousandSeparator = function(n) {
  let temp = String(n);
  let res = temp;
  let i = temp.length - 3;
  while(i > 0) {
    res = res.slice(0, i) + '.' + res.slice(i)
    i -= 3;
  }
  return res;
};

// thousandSeparator(987)
thousandSeparator(12345678)
