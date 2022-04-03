/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function (left, right) {
    let flag, res = []
    for (let i = left; i <= right; i++) {
      flag = true;
      const t = String(i)
        .split("")
        .map((i) => Number(i));
      for (let j = 0, len = t.length; j < len; j++) {
        if (i % t[j] !== 0) {
          flag = false;
        }
      }
      if (flag) {
        res.push(i);
      }
    }
    return res;
  };