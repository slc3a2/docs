const trans = function (_arr) {
	let t = {val: 0, idx: null}
	_arr.forEach((item, idx) => {
        let key = _arr[idx - 1] && _arr[idx + 1] && (item > _arr[idx - 1]) && (item > _arr[idx + 1]);
        if ((t.val < item) && key) {
            t = {
                val: item,
                idx: idx
            }
        }
	});
    console.log(`最大值是${t.val}, 下标是${t.idx}`);
    return t
}
trans([1,2,1]);
trans([1,7,1,2,2,1,7,7,6,2,5]);

[{
    chid:[
        {
            lie:""
            chid:[
                {
                    hd:""
                    child:[
                        {lie:}
                    ]
                }
            ]
        }
    ]
}]