## 冒泡排序（Bubble sort）
#### 原理和演示：  
 - 依次比较数组中相邻的每一对值，如果前面的值大于后面的值，则交换他们俩的位置。如果数组中`5`个数字(length为5)，由于比较 **两个一组** 的数字，那么只需要`4次`(length - 1)比较，就可以实现把数组中最大的一个数放到最后。  
 
 ```javascript
	function bubbleSort(arr) {
	  for (let i = 0; i < arr.length - 1; i++) {
	    if(arr[i] > arr[i+1]){
	      let temp = arr[i];
	      arr[i] = arr[i+1];
	      arr[i+1] = temp;
	    }
	    console.log(`执行${i+1}次`)
	  }
	  return arr;
	}
 ```
 - 通过第一步得到最大的一个数放在数组最后。那么剩下的前三个数继续执行第一步，结果找到第二大的数，放在数组倒数第二位，重复此步骤，直到比对完数组中最后一组数。由于第一步骤每次得到一个最大值放最后，`j`对应的正好是数组最后有多少个最大值，可以免去比较。所以上步骤每次循环可以优化一下每次少算一个最大值，每次循环总数`- 1`也就是下面例子中的`- j`。
 
	```javascript
	 function bubbleSort(arr) {
	  for(let j = 0; j < arr.length - 1; j++) {
	    for (let i = 0; i < arr.length - 1 - j; i++) {
	      if(arr[i] > arr[i+1]){
	        let temp = arr[i];
	        arr[i] = arr[i+1];
	        arr[i+1] = temp;
	      }
	      console.log(`执行${i+1}次`)
	    }
	  }
	  return arr;
	}
	```  
 - 两个变量互换值可以使用`es6`的解构语法，省去使用`temp`缓存，语法为`[a, b] = [b, a]`，即可交换`变量a`和`变量b`的值。复杂数据类型`Object`和`Array`都适用；如果第二个循环中的大小判断，一次都没有执行，说明当前这组数据是正序无需排序，用一个变量`isOk`标记下配合`break`，实现方法优化。  
 
#### 完整代码：
```javascript
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
```      
 
## 选择排序（Selection Sort）  
#### 原理：  
 - 循环整个数组，找到最小的值，放在数组第一位(和第一位交换位置）。
 - 从数组第二位开始重新循环，依旧找到最小的值，放在数组第二位，重复此步骤，直到对比完最后一组数据。    
 
#### 完整代码：    

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // arr.length - 1是因为假定数组中n个数，比较需要两个数，所以只需要比较n-1次
    let minIndex = i; // 记录每次循环开始位置，等待和最小值交换位置
    for (let j = i+1; j < arr.length; j++) { // j+1 是避免比较自身，j永远是i的后一项，让他们俩做比较
      if (arr[j] < arr[minIndex]) { // 如果后面的值小于前面的值，需要调换他们俩位置
        minIndex = j; // 保存最小值的下标
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] // 使用es6的结构语法交换值，把最小值放到数组最前面
  }
  return arr;
}
```

## 插入排序（Insertion Sort）
#### 原理  
- 
- 快看看
 持续更新中...