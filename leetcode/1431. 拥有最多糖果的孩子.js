// 1431. 拥有最多糖果的孩子 ✅
var kidsWithCandies = function(candies, extraCandies) {
  let result = [];
  for(let i = 0; i < candies.length; i++){
    candies[i] =  candies[i] + extraCandies;
    if(candies[i] === Math.max(...candies)){
      candies[i] =  candies[i] - extraCandies;
      result[i] = true;
    }else{
      candies[i] =  candies[i] - extraCandies;
      result[i] = false;
    }
  }
  return result;
};
kidsWithCandies([2,3,5,1,3], 3)
kidsWithCandies([4,2,1,1,2], 1)
kidsWithCandies([12,1,12], 10)