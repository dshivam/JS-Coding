//Reversal algorithm for array rotation

const reverseSubArray = (array,s,e) => {
    const l = e - s + 1;
    for(let i = 0; i < Math.floor(l/2); i += 1 ) {
        let temp = array[s + i];
        array[s + i] = array[e - i];
        array[e - i] = temp;
    }
}
const rotateArray = (arr, d) => {
    reverseSubArray(arr, 0, d-1);
    reverseSubArray(arr, d, arr.length - 1);
    reverseSubArray(arr, 0, arr.length - 1)
}

const array = [
    2,  5,  8,  7, 9,
   13, 15, 20, 25
 ];
 rotateArray(array, 3);
 console.log(array);