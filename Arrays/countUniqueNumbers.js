function countUniqueValues(arr) {
    if (!arr.length) {
        return 0;
    }
    let slowP = 0; 
    let fastP = 1;
    let count = 1;
    const lastElem = arr[arr.length -1];
    while(arr[fastP] <= lastElem) {
        while(arr[fastP] === arr[slowP]) {
            fastP++;
        };
        slowP = fastP;
        count++;    
        fastP++
    }

    return count;
}
const a =  [1,1,1,1,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6]

console.log(countUniqueValues(a));