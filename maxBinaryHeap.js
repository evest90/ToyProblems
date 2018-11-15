class MaxBinaryHeap {
  constructor() {
    this.values = [41,39,33,18,27,12];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1)/2);
    while (this.values[parentIndex] < this.values[index] && index > 0) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1)/2);
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;

      let index = 0;
      const len = this.values.length; 
      const element = this.values[0];
      while(true) {
        let leftChildIndex = 2 * index + 1;
        let righttChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIndex < len) {
          leftChild = this.values[leftChildIndex];
          if (leftChild > element) {
            swap = leftChildIndex;
          }
        }
        if (righttChildIndex < len) {
          rightChild = this.values[righttChildIndex];
          if ( (swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
            swap = righttChildIndex;
          }
        }
        if (swap === null) {
          break;
        }
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;

      }
    }
    return max;
  }
}

let heap = new MaxBinaryHeap();
console.log(heap);
heap.insert(55);
console.log(heap);
heap.insert(1);
console.log(heap);
heap.insert(45);
console.log(heap);