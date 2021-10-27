
// 取硬币 ✅
function getCoin(coinArr, amount, res = []){
	for(let i = coinArr.length - 1; i >= 0; i--) {
	let item = coinArr[i];
	// console.log(amount, item)
	if(amount - item >= 0) {
	res.push(item)
	getCoin(coinArr, amount - item, res)
	break;
	}
	}
	if(amount === 0) {
	console.log(res)
	return res
	}else{
	console.log('无法整除')
	return false
	}
	console.log(res)
	// return res
}
getCoin([1,2,5], 11) // 5 5 1
getCoin([1,2,5], 36) // 5 5 5 5 5 5 5 1