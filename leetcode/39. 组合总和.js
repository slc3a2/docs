/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function (candidates, target) {
	const result = [];
	const path = [];
	const backtracking = (candidates, target, sum, startIdx) => {
	  if (sum > target) {
	    return;
	  } else if (sum === target) {
	    result.push(path.slice(0)); // 克隆一下，否则每次循环重置path时，导致最终结果为空
	    return;
	  }
	  for (let i = startIdx, len = candidates.length; i < len; i++) {
	    const item = candidates[i];
	    path.push(item);
	    sum += item;
	    backtracking(candidates, target, sum, i);
	    sum -= item;
	    path.pop();
	  }
	};
	backtracking(candidates, target, 0, 0);
	return result;
};
      