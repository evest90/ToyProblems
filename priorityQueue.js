class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1)/2);
    while (this.values[parentIndex].priority > this.values[index].priority && index > 0) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1)/2);
    }
  }

  dequeue() {
    const min = this.values[0];
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
          if (leftChild.priority < element.priority) {
            swap = leftChildIndex;
          }
        }
        if (righttChildIndex < len) {
          rightChild = this.values[righttChildIndex];
          if ( (swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
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
    return min ;
  }
}


class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}