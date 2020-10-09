// 冒泡排序(bubble sort）
function bubbleSort(arr) {
  console.time('耗时');
  for(let j = 0; j < arr.length - 1; j++) {
    let isOk = true;
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if(arr[i] > arr[i+1]){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        isOk = false;
      }
    }
    if(isOk){
      break;
    }
  }
  console.timeEnd('耗时');
  return arr;
}

// 选择排序(Selection Sort)
function selectionSort(arr) {
  let minIndex = 0; // 最小值下标，默认可设置为0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];// 使用es6结构语法实现值互换
      minIndex = i;
    }
  }
  console.log(arr[minIndex])
  console.log(arr)
  console.log(minIndex)
}