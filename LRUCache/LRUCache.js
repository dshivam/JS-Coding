class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRU {
  constructor(limit) {
    this.cache = {};
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.limit = limit;
  }
  write(key, value) {
    const node = new Node(key, value);
    if (this.size === this.limit) {
      this.remove(this.tail.key)
    }
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node
    }
    this.cache[key] = node;
    this.size += 1;
  }

  remove(key) {
    if (this.cache[key]) {
      const node = this.cache[key];
      if (node.next === null) {
        this.tail = node.prev;
      } else {
        node.next.prev = node.prev;
      }
      if (node.prev === null) {
        this.head = node.next;
      } else {
        node.prev.next = node.next;
      }
      delete this.cache[key];
      this.size--;
    }
  }

  read(key) {
    if (this.size > 1) {
      const val = this.cache[key].value;
      this.remove(key);
      this.write(key, val)
    }
    return this.cache[key].value;

  }

}