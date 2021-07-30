// Implement an algorithm to find the kth to last element of a singly linked list.

function removeKthToLast(list, k) {
    let curr = list.head;
    let length = 0;
    while (curr !== null) {
        length++;
        curr = curr.next;
    }

    //kth from last means length - (k - 1) from start
    let n = length - k + 1;
    if(length === 0 || n <= 0 || k <= 0 ) {
        return null;
    }
    let prev = list.head;
    curr = prev.next;

}