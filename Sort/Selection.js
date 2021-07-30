// [6,2,67, 3 29, 32, 19, 0, 1]
// [67, 0,  1,  2,  3, 6,19, 29, 32];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;

}
const a = [6, 2, 67, 3, 29, 32, 19, 0, 1];
console.log(selectionSort(a));
