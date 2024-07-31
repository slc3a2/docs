/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	const m = n * 2;
	const ans = [];
	const path = Array(m);
	function dfs(i, open) {
	  if (i === n * 2) {
      ans.push(path.join(""));
      return;
	  }
	  if (open < n) {
      path[i] = '(';
      dfs(i + 1, open + 1);
	  }
	  if (i - open < open) {
      path[i] = ')';
      dfs(i + 1, open);
	  }
	}
	dfs(0, 0);
	return ans;
};