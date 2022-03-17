function toChineseNumber(n) {
	let res = '';
	let map1 = {
	'100000000': '亿',
	'10000000': '千万',
	'1000000': '百万',
	'100000': '十万',
	'10000': '万',
	'1000': '千',
	'100': '百',
	'10': '十',
	'1': ''
	}
	let map2 = {
	'9': '九',
	'8': '八',
	'7': '七',
	'6': '六',
	'5': '五',
	'4': '四',
	'3': '三',
	'2': '二',
	'1': '一'
	}
	let keys1 = Object.keys(map1).reverse();
	while(n > 0) {
	for(let i = 0; i < keys1.length; i++) {
	let item = keys1[i];
	if(n - item >= 0) {
	let head = parseInt(n / item);
	res += map2[head] + map1[item]
	n = n - head * item;
	}else{
	res.charAt(res.length - 1) !== '零' ? res += '零' : null;
	}
	}
	}
	console.log(res)
	return res;
}
toChineseNumber(100900911)