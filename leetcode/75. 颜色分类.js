var sortColors = function (nums) {
let startIdx = 0,
	endIdx = 0,
	temp = null;
for (let i = 0, len = nums.length; i < len; i++) {
	const item = nums[i];
	if (item === 2) {
	temp = nums[i];
	nums[i] = nums[nums.length - 1 - endIdx];
	nums[nums.length - 1 - endIdx] = temp;
	++endIdx;
	i--;
	}
	if (item === 0) {
	temp = nums[i];
	nums[i] = nums[startIdx];
	nums[startIdx] = temp;
	++startIdx;
	}
	if (i + endIdx === nums.length - 1) {
	break;
	}
}
return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([1, 2, 0]));