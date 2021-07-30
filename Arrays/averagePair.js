function averagePair(arr, avg) {
    // add whatever parameters you deem necessary - good luck!
    if (!arr.length) {
        return false;
    }
    let pl = 0;
    let pr = arr.length - 1;
    const sum = avg * 2;
    while (pl < pr) {
        if (arr[pl] + arr[pr] === sum) {
            return true;
        }
        if (arr[pl] + arr[pr] > sum) {
            pr--;
        } else {
            pl++;
        }
    }
    return false;
}