class Elem {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  static name(param) {
    console.log(`Hello ${param}`);
  }

  enqueue(element, priority) {
    const el = new Elem(element, priority);
    let f = 0;
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].priority > el.priority) {
        this.items.splice(i, 0, el);
        f = 1;
        break;
      }
    }
    if (!f) {
      this.items.push(el)
    }
  }
  dequeue() {
    return this.items.shift();
  }
}

const pq = new PriorityQueue();
pq.enqueue(2, 0);
pq.enqueue(1, 10);
pq.enqueue(4, 5);
pq.enqueue(2, 4);
pq.enqueue(12, 9);
pq.enqueue(10, 6);
pq.enqueue(10, -1);
PriorityQueue.name('Shivam');
console.log(pq.items);
pq.dequeue();
console.log(pq.items);
