// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away. 

function ifOneAway(s1, s2) {
    if (s1 === s2) {
        return true
    }
    const lDiff = s1.length - s2.length;
    if (lDiff > 1 || lDiff < -1) {
        return false;
    }
    let i = 0;
    let j = 0;
    let editCount = 0;
    while (i < s1.length && j < s2.length) {
        if (s1[i] === s2[j]) {
            i++;
            j++;
        } else {
            editCount++;
            if (editCount > 1) {
                return false;
            }
            if (lDiff === 0) {
                i++;
                j++;
            } else if (lDiff < 0) {
                j++;
            } else {
                i++;
            }
        }
    }
    return true;
}

console.log(ifOneAway('pale', 'bake'))