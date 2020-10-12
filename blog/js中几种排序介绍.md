## 冒泡排序（Bubble sort）
#### 原理和演示：  
 - 依次比较数组中相邻的每一对值，如果前面的值 **大于** 后面的值，则交换他们俩的位置。如果数组中`5`个数字(length为5)，由于比较 **两个一组** 的数字，那么只需要`4次`(length - 1)比较，就可以实现把数组中最大的一个数放到最后。  
 
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
#### 冒泡排序动画演示：  
![bubble sort.gif](https://i.loli.net/2020/10/12/KWrN6slZTEFAuhv.gif)  
 
## 选择排序（Selection Sort）  
#### 原理：  
 - 循环整个数组，找到**最小**的值，放在数组**第一位**(和第一位交换位置）。
 - 从数组**第二位**开始重新循环，依旧找到**最小**的值，放在数组第二位，重复此步骤，直到对比完最后一组数据。    
 
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
#### 选择排序动画演示：  
![section sort.gif](https://i.loli.net/2020/10/12/ibLoIgDEnRJrUas.gif)

## 插入排序（Insertion Sort）
#### 原理：  
- 将数组分成**两部分**，一部分为**已排序**(默认为数组第一个元素且只有这一个元素)，另一部分为**未排序**。
- 依次从未排序数组中取值，和已排序中的值**依次做对**比，如果**未排序元素**比**已排序元素**中某个元素**小**，那就将**已排序元素**向**后移**一位，使他本来位置变成一个**空位**，再将**待排序数据**插入空位。   
 
#### 完整代码：

```javascript
function insertionSort(arr){
  for (let i = 1; i < arr.length; i++) { // 循环未排序部分, i=1而不是0是因为默认0项为已排序部分
    let t1 = arr[i]
    for(var j = i-1; j >= 0; j--){ // 循环已排序部分，默认数组第一项有且只有第一项，下标范围为(0 - (未排序元素下标-1))，也就是例子中的i-1
      let t2 = arr[j];
      // 这里使用t1而不使用arr[i]的原因是因为数组arr排序正在发生变化，t1可能不等于arr[i]
      if(t1 < t2){ // 如果未排序元素比已排序元素小，
        arr[j+1] = t2; // 把已排序元素向后移动一位(j+1)，空出他的坑位，等循环完毕后，把未排序元素插入这个坑位
      }else{
        break; // 如果判断不成立，跳出内循环
      }
    }
    // 内循环完毕，一定会找到一空位置，这时候我们把这次循环的未排序元素也就是arr[i]，插入这个位置。
    // 为什么是j+1，这里有两种情况：
    // 1: 内部没执行break的循环，最后一次循环先执行j--，然后比对是否要跳出循环，这里的跳出条件是j>=0，那么j在跳出循环后一定是-1。 所以j+1变成数组第0项
    // 2: 碰巧内部执行了break，就不执行j--了。也就是已排序数组中每一项都比未排序元素小，那就不需要移位，直接把未排序数据插入在已排序数组最后。由于当前要排序的元素每次循环正好就在已排序数组的最后，也就是由于j的初始化等于i-1，那j+1插入即可
    arr[j+1] = t1;  // 这里使用arr[j+1]而不使用arr[i]也是因为arr排序正在发生变化，arr[j+1]可能不等于arr[i]
  }
  return arr
}
```    
#### 插入排序动画演示：  
![insertion sort.gif](https://i.loli.net/2020/10/12/5z82iWpVIJbLfu7.gif)    

## 快速排序（Quick Sort）  
#### 原理：
 - 选择数组中的一个元素作为**基准值**，用两个新数组**分别存储**原数组比基准值**大**的值，和**小**的值。  
 - 继续**递归处理**这两个新数组，最终用concat合并到一起，效果为：比基准值小的数组+基准值+比基准值小的数组。  
   
 > 快速排序有其它种实现方法，这是一种简单的实现，非原地排序，由于新建了多个新的数组，会增加空间复杂度，好处再于非常容易理解，可读性强，适合面试手写代码。    
 
#### 完整代码：  
```javascript
function quickSort(arr){ 
  if (arr.length <= 1) { return arr } // 必须要写这条，数组分解成只有一项的时候，不需要排序了，直接return，否则会报错，堆栈溢出
  let pointIndex = Math.floor(arr.length / 2); // 在大约中间位置取一下标作为基准点
  var point = arr.splice(pointIndex, 1)[0];  // 分离pointIndex和原数组arr的关系
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++){
    // 循环排序数组，小的放在left中，大的放在right中
    if(arr[i] < point){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  // 递归，让每一个left和right继续排序，直到left或right只有一项为止
  return quickSort(left).concat(point, quickSort(right));
}  
```  
#### 快速排序动画演示：  
![quick sort.gif](https://i.loli.net/2020/10/12/DzWckAlLmVU9JuN.gif)  