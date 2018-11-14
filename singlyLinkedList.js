class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  removeFromTail() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  removeFromHead() {
    if (!this.head) {
      return undefined;
    } else {
      let removed = this.head;
      this.head = this.head.next;
      this.length--; 
      if (this.length === 0) {
        this.tail = null; 
      }
      return removed;
    }
  }

  addToHead(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  retrieveNodeAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  changeNodeValue(value, index) {
    let nodeToBeChanged = this.retrieveNodeAtIndex(index);
    if (!nodeToBeChanged) {
      return false;
    } else {
      nodeToBeChanged.value = value;
      return true;
    }
  }

  insert(value, index) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      this.addToTail(value);
      return true;
    } else if (index === 0) {
      this.addToHead(value);
    } else {
      let newNode = new Node(value);
      let insertionPoint = this.retrieveNodeAtIndex(index - 1);
      let temp = insertionPoint.next;
      insertionPoint.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= length) {
      return undefined;
    } else if (index === this.length - 1) {
      return this.removeFromTail();
    } else if (index === 0) {
      return this.removeFromHead();
    } else {
      let prev = this.retrieveNodeAtIndex(index - 1);
      let removed = prev.next;
      prev.next = removed.next;
      this.length--;
      return removed;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null; 
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

}

let list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
console.log('before reverse', list);
list.reverse();
console.log('after reverse', list);
// console.log(list);
// console.log(list.retrieveNodeAtIndex(2));
// console.log(list.removeFromTail());
// console.log(list)
// list.changeNodeValue(4, 1);
// list.removeFromTail()
// console.log(list);  