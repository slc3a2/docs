// 9. 回文数 ✅  反转比较
var isPalindrome = function(x) {
  return String(x).split('').reverse().join('') === String(x)
};

isPalindrome(121);
isPalindrome(-121);

// 9. 回文数 ✅  头尾比较
var isPalindrome = function(x) {
  let t = String(x).split('')
  for(let i = 0; i < t.length; i++) {
    if(t[i] !== t[t.length - 1 - i]){
      return false;
    }
  }
  return true;
};

isPalindrome(121);
isPalindrome(-121);