// 11. 盛最多水的容器  ✅
var maxArea = function(height) {
  let len = height.length;
  let mark = 0;
  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      let x = (j+1) - (i+1);
      let y = height[i] > height[j] ? height[j] : height[i];
      x*y > mark ? mark = x*y : null;
    }
  }
  return mark;
};

maxArea([4,3,2,1,4])
maxArea([1,8,6,2,5,4,8,3,7])