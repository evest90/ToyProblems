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

  bfs() {
    const queue = [];
    const visits = [];

    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      visits.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return visits;
  }

  dfsPreOrder() {
    let visited = [];
    let current = this.root;
    function helper(node) {
      visited.push(node.value);
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
    }
    helper(current);
    return visited;
  }

  dfsPostOrder() {
    let visited = [];
    let current = this.root;
    function helper(node) {
      if (node.left) {
        helper(node.left)
      }
      if (node.right) {
        helper(node.right)
      }
      visited.push(node.value);
    }
    helper(current);
    return visited;
  }

  dfsInOrder() {
    let visited = [];
    let current = this.root;
    function helper(node) {
      if (node.left) {
        helper(node.left);
      }
      visited.push(node.value);
      if (node.right) {
        visited.push(node.right);
      }
    }
    helper(current);
    return visited;
  }
}


