// 20. 有效的括号 ✅
var isValid = function(s) {
  let t1 = ['{','[','('];
  let map = {
    '{':'}',
    '[':']',
    '(':')'
  }
  let left_arr = [];
  let right_arr = [];
  for(let i = 0; i < s.length; i++){
    let item = s[i];
    if(t1.indexOf(item) !== -1){
      left_arr.push(item);
    }else{
      if(left_arr.length > 0 && map[left_arr[left_arr.length - 1]] === item){
        left_arr.pop();
      }else{
        right_arr.push(item)
      }
    }
  }
  return left_arr.length === 0 && right_arr.length === 0;
}