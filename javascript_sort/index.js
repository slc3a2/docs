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
  for (let j = 0; j < arr.length - 1; j++) {// arr.length - 1是因为最后2个值完成比较后，最后一位只剩他自己了，就不需要排序了。
    var minVal = arr[i];
    for (let i = j+1; i < arr.length - 1; i++) {
      if (arr[i] < minVal) {
        [arr[i], minVal] = [minVal, arr[i]];// 使用es6结构语法实现值互换
        minIndex = i;
      }
    }
  }
  return arr;
  console.log(arr[minIndex])
  console.log(arr)
  console.log(minIndex)
}