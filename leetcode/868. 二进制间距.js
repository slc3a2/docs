/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const str = n.toString(2);
  let len = 0,
    start = str.indexOf("1");
  for (let end = 0; end < str.length; end++) {
    if (str[end] == "1") {
      len = Math.max(len, end - start);
      start = end;
    }
  }
  return len;
};
