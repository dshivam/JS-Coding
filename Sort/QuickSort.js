function pivotHelper(arr, startInd, endInd) {
    let pivotIndex = startInd;
    const pivotVal = arr[startInd];
    for (let i = startInd + 1; i <= endInd; i++) {
        if (pivotVal > arr[i]) {
            pivotIndex++;
            if (pivotIndex !== i) {
                let temp = arr[pivotIndex];
                arr[pivotIndex] = arr[i];
                arr[i] = temp;
            }
        }
    }
    arr[startInd] = arr[pivotIndex];
    arr[pivotIndex] = pivotVal;
    return pivotIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIndex = pivotHelper(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end)
    }
    return arr;
}

const a = [6, 2, 67, 3, 29, 32, 19, 0, 1];
console.log(quickSort(a));