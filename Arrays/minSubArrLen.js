function minSubArrayLen(arr, sum) {
    let pSlow = 0;
    let pFast = 0;
    let tempSum = 0;
    let minLen = 0;
    //loop through array get sum >= n 
    while (tempSum < sum && pFast < arr.length) {
        tempSum += arr[pFast++];
    }
    if(tempSum < sum) {
        return 0;
    }
    minLen = pFast - pSlow;
    if (minLen === 1) {
        return minLen;
    }

    //increment pslow and compare new sum with sum
    while (pSlow < arr.length) {
        console.log(tempSum, pSlow, pFast, minLen)
        pSlow++;
        if (tempSum - arr[pSlow-1] >= sum) {
            minLen = pFast - pSlow;
            if(minLen === 1) {
                return 1;
            }
            tempSum -= arr[pSlow - 1];
        } else {
            tempSum = tempSum - arr[pSlow-1] + (arr[pFast] || 0);
            if(pFast < arr.length) {
                pFast++;
            }
        }
    }
    return minLen
}

const a = minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)
console.log(a);