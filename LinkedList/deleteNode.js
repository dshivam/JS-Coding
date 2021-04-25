class Node {
  constructor(val) {
    this.value = val;
    this.next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.add = (elem) => {
        const node = new Node(elem);
        let curr;
        if (this.head) {
          curr = this.head;
          while(curr.next) {
            curr = curr.next;
          }
          curr.next = node;
        } else {
          this.head = node;
        }
    }
  }
}

const lnkList = new LinkedList();
for (let i = 0; i <= 5; i += 1) {
  lnkList.add(i);
}
console.log(lnkList);
let curr = lnkList.head.next.next;

curr.value = curr.next.value;
curr.next = curr.next.next;
let curr1 = lnkList.head
do {
console.log(curr1.value);
curr1 = curr1.next;
} while(curr1) 
