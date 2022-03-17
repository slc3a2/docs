// 14. 最长公共前缀 ✅
var longestCommonPrefix = function(strs) {
  let resStr = '';
  // 找到最长一项，来循环这项
  let maxItem = strs.reduce((a, b)=> {
    return a.length > b.length ? a : b;
  }, [''])
  if(maxItem.length === 1 && maxItem[0] === '') {
    console.log('')
    return ''
  }
  for(let i = 0; i < maxItem.length; i++) {
    let product = maxItem.charAt(i);
    let count = 0;
    for(let j = 0; j < strs.length; j++) {
      if(strs[j][i] === product) {
        count++;
      }
    }
    // strs中每一项都符合要求
    if(count === strs.length) {
      resStr = resStr + product;
      // 如果不连续，则删除最后一项
      if(maxItem.indexOf(resStr) === -1) {
        resStr = resStr.substring(0, resStr.length -1);
      }
    }else{
      break;
    }
  }
  return resStr;
}
longestCommonPrefix(["flower","flow","flight"])
// longestCommonPrefix(["dog","racecar","car"])
// longestCommonPrefix(["dog","racecar","car"])
longestCommonPrefix([""])
// longestCommonPrefix([])
// longestCommonPrefix(['a'])
// longestCommonPrefix(['',''])
longestCommonPrefix(["cir","car"])
longestCommonPrefix(["aca","cba"])
