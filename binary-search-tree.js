class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val)
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root

    while (current) {
      //if the current right is empty and the current is less than the value, add the new one
      if (current.left == null && val < current.val) {
        current.left = newNode
        break;
      }

      //if the current left is empty and the current is greater than the value, add the new one
      if (current.right == null && val > current.val) {
        current.right = newNode;
        break;
      }

      if (val > current.val) {
        current = current.right
      } else if (val < current.val){
        current = current.left
      }
    }

    return this
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current=this.root) {
    console.log(current)
    if (this.root == null) {
      this.root = new Node(val)
      return this
    }

    if (current.val < val ) {
      if (current.right == null) {
        current.right = new Node(val)
        return this
      } else {
        return this.insertRecursively(val, current.right)
      }
    } else {
      if (current.left == null) {
        current.left = new Node(val)
        return this
      } else {
        return this.insertRecursively(val, current.left)
      }
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    let current = this.root
    let found = false

    if (val === current.val) {
      return current
    }

    while (current && !found) {
      if (current.val < val) {
        current = current.right
      } else if (current.val > val) {
        current = current.left
      } else {
        found = true
      }
    }

    if (!found) return;
    return current
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current=this.root) {
    if (current) {
      if (current.val === val) {
        return current
      } else if (current.val > val) {
        return this.findRecursively(val, current.left)
      } else if (current.val < val) {
        return this.findRecursively(val, current.right)
      }
    }

    return;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let current = this.root
    let data = []

    function traverse(node) {
      data.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)
    return data

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.val)
      if (node.right) traverse(node.right)
    }

    traverse(current)
    return data
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse (node.right)
      data.push(node.val)
    }

    traverse(current)
    return data
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let data = []
    let queue = [ this.root ]

    while (queue.length > 0) {
      let current = queue.shift()
      data.push(current.val)

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    return data
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
