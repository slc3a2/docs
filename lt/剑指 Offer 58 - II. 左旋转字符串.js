// 剑指 Offer 58 - II. 左旋转字符串
var reverseLeftWords = function(s, n) {
  return s.replace(s.slice(0, n), '') + s.slice(0, n);
};
reverseLeftWords('abcdefg', 2)
reverseLeftWords('lrloseumgh', 6)