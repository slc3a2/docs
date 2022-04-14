/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function (candidates, target) {
	const result = [];
	const path = [];
	const set = [];
      
	const backtracking = (startIdx, sum) => {
	  if (sum > target) {
	    return;
	  } else if (sum === target) {
	    result.push(path.slice(0));
	    return;
	  }
	  for (let i = startIdx, len = candidates.length; i < len; i++) {
	    const item = candidates[i];
        // 巧妙去重
	    if (i > startIdx && item == candidates[i - 1]) {
	      continue;
	    }
	    path.push(item);
	    sum += item;
	    backtracking(i + 1, sum);
	    path.pop();
	    sum -= item;
	  }
	};
	candidates = candidates.sort((a, b) => {
	  return a - b;
	});
	backtracking(0, 0);
	return result;
};