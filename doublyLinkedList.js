class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  removeFromTail() {
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      let currentHeadAndTail = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentHeadAndTail;
    } else {
      let currentTail = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      currentTail.prev = null;
      this.length--;
      return currentTail;
    }
  }

  removeFromHead() {
    let removed = this.head;
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.length--;
    return removed;
  }

  addToHead(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  retrieveNodeAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index <= this.length/2) {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    } else if (index > this.length/2) {
      let counter = this.length - 1; 
      let current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
      return current;
    }
  }

  changeNodeValueAtIndex(index, value) {
    let node = this.retrieveNodeAtIndex(index);
    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    let newNode = new Node(value);
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      this.addToHead(value);
    } else if (index === this.length) {
      this.addToTail(value);
    } else {
      let node = this.retrieveNodeAtIndex(index - 1);
      let newNext = node.next;
      node.next = newNode;
      newNode.prev = node;
      newNode.next = newNext;
      newNext.prev = newNode
    }
    this.length++;
    return true;
  }

  remove(index) {
    let removed = this.retrieveNodeAtIndex(index);
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      this.removeFromHead();
    } else if (index === this.length - 1) {
      this.removeFromTail();
    } else {
      removed.prev.next = removed.next;
      removed.next.prev = removed.prev;
      removed.prev = null;
      removed.next = null;
    }
    this.length--;
    return removed;
  }
}