// 56. 合并区间 ❌
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  let result = []
  let len = intervals.length
  for(let i = 0; i < len; i++) {
      console.log(intervals[i])
      let t = intervals[i];
      // let tartget = intervals[i+1]
      for(let j = i; j < len; j++) {
        let target = intervals[j]
        
        // if(t[0] >= target[0] && t[0] <= target[1]) {
        //   result.push([target[0], target[1]])
        // }else{

        // }
      }
  }
};
merge([[1,3],[2,6],[8,10],[15,18]])

