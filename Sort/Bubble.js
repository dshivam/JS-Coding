// [6,2,67, 3 29, 32, 19, 0, 1]
// [67, 0,  1,  2,  3, 6,19, 29, 32];

function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let flag = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = 1;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (!flag) {
            return arr;
        }
    }
    return arr;
}

const a = [6, 2, 67, 3, 29, 32, 19, 0, 1]
console.log(bubbleSort(a));