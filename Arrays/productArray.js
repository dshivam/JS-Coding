// Given an array arr[] of n integers, construct a Product Array prod[] (of same size) such that prod[i] 
// is equal to the product of all the elements of arr[] except arr[i]. 
// Solve it without division operator in O(n) time.

const productArraySolution1 = (arr) => {
    const len = arr.length;
    const prefixProd = new Array(len);
    const suffixProd = new Array(len);
    prefixProd[0] = 1;
    suffixProd[len - 1] = 1;
    for (let i = 1; i < len; i += 1) {
        prefixProd[i] = prefixProd[i - 1]*arr[i-1];
        suffixProd[len - 1 - i] = suffixProd[len - i]*arr[len - i];
    }
    for (let i = 0; i < len; i += 1) {
        arr[i] = prefixProd[i]*suffixProd[i];
    }
}
const a = JSON.parse(process.argv[2]);
productArraySolution1(a);
console.log(a);