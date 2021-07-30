class Node {
  constructor(val) {
    this.value = val;
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length <= 0) {
      return this;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    let currNode = this.head;
    while (currNode.next.next) {
      currNode = currNode.next;
    }
    currNode.next = null;
    this.tail = currNode;
    this.length--;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    let counter = 0;
    let currNode = this.head;
    while (counter < index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode
  }
  insert(val, index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    const node = new Node(val);
    if (index === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        let temp = this.head;
        this.head = node;
        node.next = temp;
      }
      this.length++;
      return this;
    }

    let counter = 0;
    let currNode = this.head;
    while (counter < index - 1) {
      currNode = currNode.next;
      counter++;
    }
    let temp = currNode.next;
    currNode.next = node;
    node.next = temp;
    if (index === this.length) {
      this.tail = node;
    }
    this.length++;
    return this;
  }
  reverse() {
    if (this.length === 0 || this.length === 1) {
      return this
    }
    let prevNode = this.head;
    let currNode = prevNode.next;
    prevNode.next = null;
    this.tail = prevNode;
    while (currNode.next) {
      let temp = currNode;
      currNode = currNode.next;
      temp.next = prevNode;
      prevNode = temp;
    }
    currNode.next = prevNode;
    this.head = currNode;
    return this;
  }
  
}

const list = new LinkedList();
console.log('list', list)