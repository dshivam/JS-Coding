const getMajorityElement = (array) => {
    const lookupObject = {};
    const highestOccuring = [0, 0];
    for (let i = 0; i < array.length; i += 1) {
        if (lookupObject[array[i]]) {
            lookupObject[array[i]] += 1;
        } else {
            lookupObject[array[i]] = 1;
        }
        if (lookupObject[array[i]] > highestOccuring[1]) {
            highestOccuring[0] = array[i];
            highestOccuring[1] = lookupObject[array[i]];
        }
    }
    if (highestOccuring[1] > array.length/2) {
        console.log("Majority Element", highestOccuring[0]);
    } else {
        console.log("No Majority Element");
    }
};
const array = [9, 2, 3, 9, 5, 6, 9, 9, 9];
getMajorityElement(array);