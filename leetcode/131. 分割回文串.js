/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  let temp = [];
  let isPalindrome = function (s) {
    s = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  let dfs = function (s, start) {
    if (start === s.length) {
      result.push([...temp]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s.substring(start, i + 1))) {
        temp.push(s.substring(start, i + 1));
        dfs(s, i + 1);
        temp.pop();
      }
    }
  };
  dfs(s, 0);
  return result;
};
