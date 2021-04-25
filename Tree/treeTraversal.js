class Node {
  constructor(elem) {
    this.value = elem;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.insertRoot = (value) => {
      const node = new Node(value);
      if (!this.root) {
        this.root = node;
      }
    }
    this.insertLeftChild = (value, parentNode) => {
      const node = new Node(value);
      parentNode.left = node;
    }
    this.insertRightChild = (value, parentNode) => {
      const node = new Node(value);
      parentNode.right = node;
    }
    this.preOrder = (root) => {
      if (root === null) {
        return;
      }
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
    this.postOrder = (root) => {
      if (root === null) {
        return;
      }
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value + ' ');
    }
    this.inOrder = (root) => {
      if (root === null) {
        return;
      }
      this.inOrder(root.left);
      console.log(root.value + ' ');
      this.inOrder(root.right);
    }
    this.size = (root) => {
      if (root === null) {
        return 0;
      }
      return this.size(root.left) + this.size(root.right) + 1;
    }
  }
}

const treeDs1 = new Tree();
treeDs1.insertRoot(0);
treeDs1.insertLeftChild(1, treeDs1.root);
treeDs1.insertRightChild(2, treeDs1.root);
treeDs1.insertLeftChild(3, treeDs1.root.left);
treeDs1.insertRightChild(4, treeDs1.root.left);
treeDs1.insertLeftChild(5, treeDs1.root.right);
treeDs1.insertRightChild(6, treeDs1.root.right);

const treeDS = new Tree();
treeDS.insertRoot(0);
treeDS.insertLeftChild(1, treeDS.root);
treeDS.insertRightChild(2, treeDS.root);
treeDS.insertLeftChild(3, treeDS.root.left);
treeDS.insertRightChild(4, treeDS.root.left);
treeDS.insertLeftChild(5, treeDS.root.right);
treeDS.insertRightChild(6, treeDS.root.right);
treeDS.preOrder(treeDS.root);
console.log('\n');
treeDS.postOrder(treeDS.root);
console.log('\n');
treeDS.inOrder(treeDS.root);
console.log(treeDS.size(treeDS.root));
const checkIfIdentical = (root1, root2) => {
  if (root1 === null && root2 === null) {
    return true;
  }
  if (root1 === null || root2 === null) {
    return false
  }
  if (root1.value !== root2.value) {
    return false
  }
  return checkIfIdentical(root1.left, root2.left) && checkIfIdentical(root1.right, root2.right);
}

const findHeight = (root) => {
  if (root === null) {
    return 0;
  }
  const lHeight = findHeight(root.left);
  const rHeight = findHeight(root.right);
  return lHeight > rHeight ? lHeight + 1 : rHeight + 1; 
}

console.log(findHeight(treeDS.root));

