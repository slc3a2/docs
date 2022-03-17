// 42. 接雨水 ✅
// 从左边第一个节点开始遍历，分别找到符合条件的他的前一项和后一项，要求是满足:前一项 > 当前值 < 后一项，如不满足，前一项继续向前移动一位，后一项向后移动一位，
// 如果有符合条件的组合下：如果left值大于right值，所有在left和right之间的值需要等于right的值，否则left和right之间的值都等于left的值，然后每次变化，用count去记录，最后返回count，count为结果
var trap = function(height) {
  let basic = JSON.parse(JSON.stringify(height));
  let count = 0;
  for(let i = 0; i < height.length; i++) {
    let item = height[i];
    let left, right;
    let startIdx, endIdx
    for(let j = i; j >= 0; j--) {
      if(height[j] > item) {
        left = height[j]
        startIdx = j;
        break;
      }
    }
    for(let l = i; l < height.length; l++) {
      if(height[l] > item) {
        right = height[l]
        endIdx = l;
        break;
      }
    }
    if(typeof(right) !== 'undefined' && typeof(left) !== 'undefined' && typeof(item) !== 'undefined') {
      let temp = 0;
      if(left > right) {
        temp = right;
      } else {
        temp = left;
      }
      if(temp !== 0) {
        for(let ii = startIdx+1; ii < endIdx; ii++) {
          count += temp - height[ii];
          height[ii] = temp;
        }
      }
    }
  }
  console.log(`柱子排列为:${basic} 的情况下，这样结构最大可接${count}滴雨水，接满水后的结构为: ${height}`)
  return count;
};

trap([4,3,2,1,2,3,4])
trap([1,2,3,4,5,2,3,1,2,3,4,5,5])
trap([0,1,0,2,1,0,1,3,2,1,2,1])

let l1 = {
  val: 2,
  next:  {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}
let l1 = {
}

let l2 = {
  val: 5,
  next:  {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

