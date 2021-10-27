// 13. 罗马数字转整数 ✅
var romanToInt = function(num) {
  let o = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  let map = new Map(o);
  let res = ''
  while(num !== 0) {
    for(let i of map) {
      if(num >= i[0]) {
        num -= i[0];
        res += i[1];
        break;
      }
    }
  }
  return res
}

romanToInt(1994)
romanToInt(3)
romanToInt(20)