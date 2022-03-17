// 4. 寻找两个正序数组的中位数 ❌ leetcode[1,3] [2]用例和本地结果不同
var findMedianSortedArrays = function(nums1, nums2) {
	let temp = nums1.concat(nums2).sort((a, b)=> {return a - b});
	let len = temp.length;
	if(len % 2 === 1) {
	  return temp[len / 2 - 0.5]
	} else {
	  let prev = temp[len / 2 - 1];
	  let next = temp[len / 2];
	  return (prev + next) / 2
	}
};

// nums1 = [1, 3], nums2 = [2]
// console.log(findMedianSortedArrays(nums1, nums2))