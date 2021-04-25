// Given an array of positive integers. All numbers occur even number of times except one number which occurs 
// odd number of times. Find the number in O(n) time & constant space.

// Approach 1 : Using Lookup Object (O(n) and auxilary space)

// Approach 2: XOR Operation (O(n) with no extra space)

const findnumOccurredOddTimes = (array) => {
    let temp = array[0];
    for (let i = 1; i < array.length; i++) {
        temp ^= array[i];
    }
    console.log(temp);
    return temp;
}

let a = [1, 2, 3, 2, 3, 1, 3];
findnumOccurredOddTimes(a);
a = [5, 7, 2, 7, 5, 2, 5];
findnumOccurredOddTimes(a);