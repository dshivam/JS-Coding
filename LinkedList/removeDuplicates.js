// Write code to remove duplicates from an unsorted li nked list.

import LinkedList from './index.js';

function removeDups(list) {
    const head = list.head;
    if (head === null || head.next === null) {
        return head;
    }
    let prevNode = head;
    let currNode = head.next;
    const freqCounter = {};
    do {
        freqCounter[prevNode.value] = true;
        if (freqCounter[currNode.value]) {
            if (currNode.next === null) {
                list.tail = prevNode
            }
            prevNode.next = currNode.next;
            currNode = currNode.next;
            list.length--;
        } else {
            currNode = currNode.next;
            prevNode = prevNode.next;
        }
    }
    while (currNode !== null)
    return head;
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(1);
list.push(3);
console.log('l1', list);

removeDups(list);
console.log('l2', list);

//1-2-3-4-5-3-2-1-2