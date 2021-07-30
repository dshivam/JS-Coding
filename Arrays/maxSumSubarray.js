function maxSubarraySum(arr, n) {
    // find sum of subarr(0,1) set it to max
    let maxSum = 0;
    let tempSum = 0;
    if (n > arr.length) {
        return null
    }
    for (let i = 0; i < n; i += 1) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    //loop from n to end and replace max sum with new max sum
    for (let i = n; i < arr.length; i += 1) {
        tempSum = tempSum + arr[i] - arr[i - n];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;

}