// 165. 比较版本号  ✅
var compareVersion = function(version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  for(let i = 0; i < Math.max(v1.length, v2.length); i++){
    if(v1[i] === undefined){
      v1.push('0')
    }
    if(v2[i] === undefined){
      v2.push('0')
    }
    v1[i] = Number(v1[i])
    v2[i] = Number(v2[i])
  }
  let v1_t = Number(v1.join(''))
  let v2_t = Number(v2.join(''))
  if(v1_t > v2_t){
    return 1
  }else if(v1_t < v2_t){
    return -1
  }else{
    return 0
  }
};
console.log(compareVersion('1.01', '1.001'));
console.log(compareVersion('1.0', '1.0.0'));
console.log(compareVersion('0.1', '1.1'));