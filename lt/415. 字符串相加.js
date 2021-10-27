// 415. 字符串相加
let addStrings = function(a, b) {
  let res = []
  let temp = 0
  if(a.length > b.length) {
    let t = a.length - b.length
    for(let i = 0; i < t; i++) {
      b = '0' + b
    }
  } else {
    let t = b.length - a.length
    for(let i = 0; i < t; i++) {
      a = '0' + a
    }
  }
  for(let len = Math.max(a.length, b.length) - 1; len >= 0; len--) {
      let i = len
      let t_a = Number(a.charAt(i) || 0)
      let t_b = Number(b.charAt(i) || 0)
      let count = String(t_a + t_b + temp)
      temp = 0
      if(count.length > 1) {
        temp = Number(count.charAt(0))
        res.push(count.charAt(1))
      } else {
        res.push(count)
      }
  }
  if(temp !== 0) {
    res.push(temp)
  }
  return res.reverse().join('')
}