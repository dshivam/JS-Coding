const findIfArrayHas2ElementsWithGivenSum = (array, sum) => {
    const lookupObj = {};
    for (let i = 0; i < array.length; i += 1) {
        if (lookupObj[sum - array[i]]) {
            console.log(array[i], sum - array[i]);
            return;
        }
        lookupObj[array[i]] = true;
    }
    console.log("No Pair exists")
    return;
};
const array = [3,5,10,4,65,100,9,29,43,54,120,6,765,32,55,34,109];
findIfArrayHas2ElementsWithGivenSum(array, 229);
findIfArrayHas2ElementsWithGivenSum(array, -1);