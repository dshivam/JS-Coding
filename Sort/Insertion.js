// [6,2,67, 3 29, 32, 19, 0, 1]
// [2,6, 67, 3 29, 32, 19, 0, 1]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        for (var j = i - 1; j >= 0; j--) {
            if (arr[j] <= currVal) {
                break;
            } else {
                arr[j + 1] = arr[j];
            }
        }
        arr[j + 1] = currVal;
    }
    return arr;
}


const a = [6, 2, 67, 3, 29, 32, 19, 0, 1]
console.log(insertionSort(a));