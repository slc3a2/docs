var MedianFinder = function () {
  // 最大堆，存储较小的一半数字
  this.maxHeap = [];
  // 最小堆，存储较大的一半数字
  this.minHeap = [];
};

// 向最大堆中插入元素
function insertMaxHeap(heap, num) {
  heap.push(num);
  let i = heap.length - 1;
  while (i > 0) {
    let parent = Math.floor((i - 1) / 2);
    if (heap[i] <= heap[parent]) break;
    [heap[i], heap[parent]] = [heap[parent], heap[i]];
    i = parent;
  }
}

// 从最大堆中移除堆顶元素
function removeMaxHeap(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();
  const max = heap[0];
  heap[0] = heap.pop();
  let i = 0;
  while (true) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;
    if (left < heap.length && heap[left] > heap[largest]) {
      largest = left;
    }
    if (right < heap.length && heap[right] > heap[largest]) {
      largest = right;
    }
    if (largest === i) break;
    [heap[i], heap[largest]] = [heap[largest], heap[i]];
    i = largest;
  }
  return max;
}

// 向最小堆中插入元素
function insertMinHeap(heap, num) {
  heap.push(num);
  let i = heap.length - 1;
  while (i > 0) {
    let parent = Math.floor((i - 1) / 2);
    if (heap[i] >= heap[parent]) break;
    [heap[i], heap[parent]] = [heap[parent], heap[i]];
    i = parent;
  }
}

// 从最小堆中移除堆顶元素
function removeMinHeap(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();
  const min = heap[0];
  heap[0] = heap.pop();
  let i = 0;
  while (true) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let smallest = i;
    if (left < heap.length && heap[left] < heap[smallest]) {
      smallest = left;
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
      smallest = right;
    }
    if (smallest === i) break;
    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
    i = smallest;
  }
  return min;
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.length === 0 || num <= this.maxHeap[0]) {
    insertMaxHeap(this.maxHeap, num);
  } else {
    insertMinHeap(this.minHeap, num);
  }

  // 平衡两个堆的大小
  if (this.maxHeap.length > this.minHeap.length + 1) {
    insertMinHeap(this.minHeap, removeMaxHeap(this.maxHeap));
  } else if (this.minHeap.length > this.maxHeap.length) {
    insertMaxHeap(this.maxHeap, removeMinHeap(this.minHeap));
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.length === this.minHeap.length) {
    return (this.maxHeap[0] + this.minHeap[0]) / 2;
  } else {
    return this.maxHeap[0];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
