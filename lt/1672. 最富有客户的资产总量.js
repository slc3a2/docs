// 1672. 最富有客户的资产总量 ✅
var maximumWealth = function(accounts) {
  for(let i = 0; i < accounts.length; i++){
    let item = accounts[i];
    accounts[i] = item.reduce((a, b)=> {return a+b;});
  }
  return Math.max(...accounts);
};
maximumWealth([[1,5],[7,3],[3,5]])
maximumWealth([[1,2,3],[3,2,1]])
