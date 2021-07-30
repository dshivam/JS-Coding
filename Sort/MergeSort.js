//[1,3,10,11,23] [2,6,19,20,24, 32]

function mergeArrays(arr1, arr2) {
    const mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++
        }
    }
    if (i === arr1.length) {
        for (let k = j; k < arr2.length; k++) {
            mergedArr.push(arr2[k])
        }
    } else if (j === arr2.length) {
        for (let k = i; k < arr1.length; k++) {
            mergedArr.push(arr1[k])
        }
    }
    return mergedArr

}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return mergeArrays(left, right)
}

const a = [12, 1, 22, 233, 9, 32, 23, 0, 11, 6, 52, 28, 119, 64];
mergeSort(a);