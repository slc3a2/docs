// // 冒泡排序(Bubble sort）
// function bubbleSort(arr) {
//   console.time('耗时');
//   for(let j = 0; j < arr.length - 1; j++) {
//     let isOk = true;
//     for (let i = 0; i < arr.length - 1 - j; i++) {
//       if(arr[i] > arr[i+1]){
//         [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//         isOk = false;
//       }
//     }
//     if(isOk){
//       break;
//     }
//   }
//   console.timeEnd('耗时');
//   return arr;
// }

// // 选择排序(Selection Sort)
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) { // arr.length - 1是因为假定数组中n个数，比较需要两个数，所以只需要比较n-1次
//     let minIndex = i; // 记录每次循环开始位置，等待和最小值交换位置
//     for (let j = i+1; j < arr.length; j++) { // j+1 是避免比较自身，j永远是i的后一项，让他们俩做比较
//       if (arr[j] < arr[minIndex]) { // 如果后面的值小于前面的值，需要调换他们俩位置
//         minIndex = j; // 保存最小值的下标
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] // 使用es6的结构语法交换值，把最小值放到数组最前面
//   }
//   return arr;
// }

// // 插入排序(Insertion Sort)
// function insertionSort(arr){
//   for (let i = 1; i < arr.length; i++) { // 循环未排序部分, i=1而不是0是因为默认0项为已排序部分
//     let t1 = arr[i]
//     for(var j = i-1; j >= 0; j--){ // 循环已排序部分，默认数组第一项有且只有第一项，下标范围为(0 - (未排序元素下标-1))，也就是例子中的i-1
//       let t2 = arr[j];
//       // 这里使用t1而不使用arr[i]的原因是因为数组arr排序正在发生变化，t1可能不等于arr[i]
//       if(t1 < t2){ // 如果未排序元素比已排序元素小，
//         arr[j+1] = t2; // 把已排序元素向后移动一位(j+1)，空出他的坑位，等循环完毕后，把未排序元素插入这个坑位
//       }else{
//         break; // 如果判断不成立，跳出内循环
//       }
//     }
//     // 内循环完毕，一定会找到一空位置，这时候我们把这次循环的未排序元素也就是arr[i]，插入这个位置。
//     // 为什么是j+1，这里有两种情况：
//     // 1: 内部没执行break的循环，最后一次循环先执行j--，然后比对是否要跳出循环，这里的跳出条件是j>=0，那么j在跳出循环后一定是-1。 所以j+1变成数组第0项
//     // 2: 碰巧内部执行了break，就不执行j--了。也就是已排序数组中每一项都比未排序元素小，那就不需要移位，直接把未排序数据插入在已排序数组最后。由于当前要排序的元素每次循环正好就在已排序数组的最后，也就是由于j的初始化等于i-1，那j+1插入即可
//     arr[j+1] = t1;  // 这里使用arr[j+1]而不使用arr[i]也是因为arr排序正在发生变化，arr[j+1]可能不等于arr[i]
//   }
//   return arr
// }

// // 快速排序(Quick Sort)
// function quickSort(arr){ 
//   if (arr.length <= 1) { return arr } // 必须要写这条，数组分解成只有一项的时候，不需要排序了，直接return，否则会报错，堆栈溢出
//   let pointIndex = Math.floor(arr.length / 2); // 在大约中间位置取一下标作为基准点
//   var point = arr.splice(pointIndex, 1)[0];  // 分离pointIndex和原数组arr的关系
//   let left = [];
//   let right = [];
//   for(let i = 0; i < arr.length; i++){
//     // 循环排序数组，小的放在left中，大的放在right中
//     if(arr[i] < point){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   // 递归，让每一个left和right继续排序，直到left或right只有一项为止
//   return quickSort(left).concat(point, quickSort(right));
// }

let randomArray = (length) => {
  let i = 0
  let index = 0
  let temp = null
  let arr = [length]
  length = typeof(length) === 'undefined' ? 9 : length
  for(i=1; i<=length; i++) {
      arr[i - 1] = i
  }
  for(i = 1; i<=length; i++) {
      index = parseInt(Math.random() * (length - i)) + i
      if (index != i) {
      temp = arr[i-1]
      arr[i-1] = arr[index-1]
      arr[index-1] = temp
      }
  }
  return arr
}

function bubbleSort(arr) {
  console.time('冒泡排序耗时');
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
  console.timeEnd('冒泡排序耗时');
  return arr;
}

function quickSort(arr){ 
  // console.time('快速排序耗时');
  if (arr.length <= 1) { return arr }
  let pointIndex = Math.floor(arr.length / 2);
  var point = arr.splice(pointIndex, 1)[0];
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < point){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  // console.timeEnd('快速排序耗时');
  return quickSort(left).concat(point, quickSort(right));
}  


function shellSort(arr) {
  console.time('希尔排序耗时');
  var len = arr.length,
      temp,
      gap = 1;
  while(gap < len/3) {          
      gap = gap*3+1;
  }
  for (gap; gap > 0; gap = Math.floor(gap/3)) {
      for (var i = gap; i < len; i++) {
          temp = arr[i];
          for (var j = i-gap; j >= 0 && arr[j] > temp; j -= gap) {
              arr[j+gap] = arr[j];
          }
          arr[j+gap] = temp;
      }
  }
  console.timeEnd('希尔排序耗时');
  return arr;
}
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  console.time('选择排序耗时');
  for (var i = 0; i < len - 1; i++) {
      minIndex = i;
      for (var j = i + 1; j < len; j++) {
          if (arr[j] < arr[minIndex]) {     //寻找最小的数
              minIndex = j;                 //将最小数的索引保存
          }
      }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
  }
  console.timeEnd('选择排序耗时');
  return arr;
}

function insertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
      console.time('插入排序耗时：');
      for (var i = 1; i < array.length; i++) {
          var key = array[i];
          var j = i - 1;
          while (j >= 0 && array[j] > key) {
              array[j + 1] = array[j];
              j--;
          }
          array[j + 1] = key;
      }
      console.timeEnd('插入排序耗时：');
      return array;
  } else {
      return 'array is not an Array!';
  }
}

function mergeSort(arr) {  //采用自上而下的递归方法
  var len = arr.length;
  if(len < 2) {
      return arr;
  }
  var middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
  var result = [];
  // console.time('归并排序耗时');
  while (left.length && right.length) {
      if (left[0] <= right[0]) {
          result.push(left.shift());
      } else {
          result.push(right.shift());
      }
  }

  while (left.length)
      result.push(left.shift());

  while (right.length)
      result.push(right.shift());
  // console.timeEnd('归并排序耗时');
  return result;
}

function heapSort(array) {
  console.time('堆排序耗时');
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
      //建堆
      var heapSize = array.length, temp;
      for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
          heapify(array, i, heapSize);
      }

      //堆排序
      for (var j = heapSize - 1; j >= 1; j--) {
          temp = array[0];
          array[0] = array[j];
          array[j] = temp;
          heapify(array, 0, --heapSize);
      }
      console.timeEnd('堆排序耗时');
      return array;
  } else {
      return 'array is not an Array!';
  }
}
  
function heapify(arr, x, len) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
      var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
      if (l < len && arr[l] > arr[largest]) {
          largest = l;
      }
      if (r < len && arr[r] > arr[largest]) {
          largest = r;
      }
      if (largest != x) {
          temp = arr[x];
          arr[x] = arr[largest];
          arr[largest] = temp;
          heapify(arr, largest, len);
      }
  } else {
      return 'arr is not an Array or x is not a number!';
  }
}

function countingSort(array) {
  var len = array.length,
      B = [],
      C = [],
      min = max = array[0];
  console.time('计数排序耗时');
  for (var i = 0; i < len; i++) {
      min = min <= array[i] ? min : array[i];
      max = max >= array[i] ? max : array[i];
      C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
  }
  for (var j = min; j < max; j++) {
      C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
  }
  for (var k = len - 1; k >= 0; k--) {
      B[C[array[k]] - 1] = array[k];
      C[array[k]]--;
  }
  console.timeEnd('计数排序耗时');
  return B;
}

function bucketSort(array, num) {
  if (array.length <= 1) {
      return array;
  }
  var len = array.length, buckets = [], result = [], min = max = array[0], regex = '/^[1-9]+[0-9]*$/', space, n = 0;
  num = num || ((num > 1 && regex.test(num)) ? num : 10);
  console.time('桶排序耗时');
  for (var i = 1; i < len; i++) {
      min = min <= array[i] ? min : array[i];
      max = max >= array[i] ? max : array[i];
  }
  space = (max - min + 1) / num;
  for (var j = 0; j < len; j++) {
      var index = Math.floor((array[j] - min) / space);
      if (buckets[index]) {   //  非空桶，插入排序
          var k = buckets[index].length - 1;
          while (k >= 0 && buckets[index][k] > array[j]) {
              buckets[index][k + 1] = buckets[index][k];
              k--;
          }
          buckets[index][k + 1] = array[j];
      } else {    //空桶，初始化
          buckets[index] = [];
          buckets[index].push(array[j]);
      }
  }
  while (n < num) {
      result = result.concat(buckets[n]);
      n++;
  }
  console.timeEnd('桶排序耗时');
  return result;
}


let a1 = randomArray(1000);
console.log(`原数组：内部${a1.length}条`)
console.log('-------------')
bubbleSort(a1)
// console.log(`冒泡结果：${bubbleSort(a1)}`)
console.log('-------------')
console.time('快速排序耗时');
quickSort(a1)
// console.log(`快排结果：${quickSort(a1)}`)
console.timeEnd('快速排序耗时');
console.log('-------------')
shellSort(a1)
console.log('-------------')
selectionSort(a1)
console.log('-------------')
insertionSort(a1)
// console.log(insertionSort(a1))
console.log('-------------')
console.time('并归排序耗时');
mergeSort(a1)
console.timeEnd('并归排序耗时');
console.log('-------------')
heapSort(a1)
console.log('-------------')
countingSort(a1)
console.log('-------------')
bucketSort(a1,4)