function tr(num, len){
  let end = Number(num).toFixed(len).split('.')[1];
  console.log(end)
  let temp = Number(String(num).split('.')[0]);
  // console.log(typeof temp)
  // console.log(temp.toLocaleString())
  return temp.toLocaleString()+'.'+end
}
console.log(tr(12312332425463.123123331, 5))