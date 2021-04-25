const segregate0And1 = (array) => {
let slowPointer = 0;
for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 0) {
        let temp = array[i];
        array[i] = array[slowPointer];
        array[slowPointer] = temp;
        slowPointer++;
    }
}
}
const a = JSON.parse(process.argv[2]);
segregate0And1(a);
console.log(a);