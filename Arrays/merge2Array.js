const merge2Array = (arrayMN, arrayN) => {
    let pointerN = 0;
    let nextNonNullIndex = 0;
    for (let i = 0; i < arrayMN.length; i += 1) {
        if (arrayMN[i] === null) {
            nextNonNullIndex = findNextnonNullIndex(i, arrayMN);
            if (nextNonNullIndex === -1) {
                while( i < arrayMN.length) {
                    arrayMN[i++] = arrayN[pointerN++]
                }
                return arrayMN;
            }
            if (arrayN[pointerN] <= arrayMN[nextNonNullIndex]) {
                arrayMN[i] = arrayN[pointerN];
                pointerN++;
            } else {
                arrayMN[i] = arrayMN[nextNonNullIndex];
                arrayMN[nextNonNullIndex] = null;
            }
        } else if (arrayMN[i] > arrayN[pointerN]) {
            let temp = arrayN[pointerN]
            arrayN[pointerN] = arrayMN[i];
            arrayMN[i] = temp;
        }
    }
    return arrayMN;
}
const findNextnonNullIndex = (i, arr) => {
    let j = ++i;
    while(!arr[j]) {
        if ( j >= arr.length - 1) {
            return -1;
        }
        j++;
    }
    return j;
}

const array1 = [2, 8, null, null, null, 13, null, 15, 20];
const array2  = [5, 7, 9, 25];
console.log(merge2Array(array1, array2));