function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.ceil((left + right) / 2);
    while (arr[middle] !== num && left <= right) {
        if(arr[middle] > num) {
            right = middle - 1;
        } else {
            left = middle + 1
        }
        middle = Math.ceil((left + right) / 2);
    }
    if (arr[middle] === num) {
        return middle;
    }
    return -1;
}

console.log(binarySearch([4,23, 45, 46, 67, 102, 107, 208], 1007))