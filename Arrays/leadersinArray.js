const leadersInArray = (array) => {
    let leader = array[array.length - 1];
    console.log(leader);
    for (let i = array.length - 2; i >=0; i--) {
        if (array[i] > leader) {
            leader = array[i];
            console.log(leader);
        }
    }
};
const array = [
    16, 17, 4, 3, 5, 2
 ];
 leadersInArray(array);