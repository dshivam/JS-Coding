// Given two strings, write a method to decide if one is a permutation of the
// other.

function checkIfPermutaion(s1, s2) {
    const fc1 = {};
    const fc2 = {};

    if (s1 === s2) {
        return true;
    }
    if (s1.length !== s2.length) {
        return false;
    }
    for (let i = 0; i < s1.length; i++) {
        let char1 = s1[i];
        let char2 = s2[i];
        if (fc1[char1]) {
            fc1[char1]++;
        } else {
            fc1[char1] = 1;
        }
        if (fc2[char2]) {
            fc2[char2]++;
        } else {
            fc2[char2] = 1
        }
    }
    if (Object.keys(fc1).length !== Object.keys(fc2).length) {
        return false;
    }
    const keys = Object.keys(fc1);
    for (let i = 0; i < keys.length; i++) {
        if (fc1[keys[i]] !== fc2[keys[i]]) {
            return false
        }
    }
    return true;
}


const s1 = 'anagram';
const s2 = 'magbar'

console.log(checkIfPermutaion(s1,s2))