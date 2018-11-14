class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      function findInsertionPoint(node, value) {
        if (value === node.value) {
          return undefined;
        }
        let newNode = new Node(value);
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
            return;
          } else {
            findInsertionPoint(node.left, value);
          }
        } else {
          if (!node.right) {
            node.right = newNode;
            return;
          } else {
            findInsertionPoint(node.right, value);
          }
        }
      }
      findInsertionPoint(this.root, value);
      return this;
    }
  }

  search(value) {
    if (!this.root) {
      return false;
    } else {
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (value > current.value) {
          current = current.right;
        } else if (value < current.value) {
          current = current.left;
        } else {
          found = true;
        }
      }
      if (!found) {
        return undefined;
      }
      return current;
    }
  }
}

let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree);
console.log(tree.search(2));