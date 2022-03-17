// 3. 无重复字符的最长子串 ❌
var lengthOfLongestSubstring = function(s) {
  let arr = [];
  let max = 0;
  for(let i = 0; i < s.length; i++) {
      if(arr.indexOf(s[i]) !== -1){
        arr.splice(0, arr.indexOf(s[i])+1);
      }
      arr.push(s.charAt(i))
      max = Math.max(arr.length, max) 
  }
  console.log(max)
  return max
};
lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('pwwkew')
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("")
lengthOfLongestSubstring(" ")
lengthOfLongestSubstring("au")
lengthOfLongestSubstring("aab")