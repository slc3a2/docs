var arrayRankTransform = function (arr) {
  const len = arr.length;
  if (len === 0) {
    return [];
  }
  if (len === 1) {
    return [1];
  }
  const temp = [...arr];
  temp.sort((a, b) => a - b);
  const map = new Map();
  let index = 1;
  for (let i = 0; i < len; i++) {
    if (!map.has(temp[i])) {
      map.set(temp[i], index++);
    }
  }
  const res = [];
  for (let i = 0; i < len; i++) {
    if (map.has(arr[i])) {
      res.push(map.get(arr[i]));
    }
  }
  return res;
};
