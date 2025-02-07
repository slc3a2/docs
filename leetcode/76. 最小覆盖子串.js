/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let result = "";
  let left = 0;
  let right = 0;
  let minLen = Infinity;
  let window = {};
  let needs = {};
  for (let i = 0; i < t.length; i++) {
    needs[t[i]] ? needs[t[i]]++ : (needs[t[i]] = 1);
  }
  let match = 0;
  while (right < s.length) {
    let c1 = s[right];
    if (needs[c1]) {
      window[c1] ? window[c1]++ : (window[c1] = 1);
      if (window[c1] === needs[c1]) {
        match++;
      }
    }
    right++;
    while (match === Object.keys(needs).length) {
      if (right - left < minLen) {
        minLen = right - left;
        result = s.substring(left, right);
      }
      let c2 = s[left];
      if (needs[c2]) {
        window[c2]--;
        if (window[c2] < needs[c2]) {
          match--;
        }
      }
      left++;
    }
  }
  return result;
};
