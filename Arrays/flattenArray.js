const flattenArray = (array, initArray) => {
  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      flattenArray(elem, initArray)
    } else {
      initArray.push(elem);
    }
  });
}
const arr = [];
const a = [[1, 2, 3], 4, [5, [6, 7]]];
flattenArray(a, arr);
console.log(arr);
