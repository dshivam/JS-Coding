// Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures? 


// abcdegsaeds

// Sort Array (nLogn)
// iterate to find out dupticates(O(n))

function mergeString(left, right) {
    let merged = '';
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged += left[i];
            i++;
        } else if (left[i] > right[j]) {
            merged += right[j];
            j++;
        } else {
            return true;
        }
    }

    while (i < left.length) {
        merged += left[i]
        i++;
    }

    while (j < right.length) {
        merged += right[j]
        j++;
    }

    return merged;

}

function sortString(str) {
    if (str.length <= 1) {
        return str;
    }
    let mid = Math.floor(str.length / 2)
    const left = sortString(str.slice(0, mid));
    if (left === true) {
        return true
    }
    const right = sortString(str.slice(mid));
    if (right === true) {
        return true
    }
    return mergeString(left, right);
}

function isUnique(str) {
    if (sortString(str) === true) {
        return true;
    }
    return false;
}

console.log(isUnique('aebcdgs'))