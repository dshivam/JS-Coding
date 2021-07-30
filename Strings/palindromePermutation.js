// Given a string, write a function to check if it is a permutation of a palindrome. 
//A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 

// Logic : there should not be more than one character with odd count
function isPalindromePermutation(str) {
    // take an object to store charavter counts
    const freqCounter = {};

    //loop through the string to count the characters and store in object
    for (let i = 0; i < str.length; i += 1) {
        const char = str[i];
        if (isLetter(char) && freqCounter[char]) {
            freqCounter[char]++;
        } else if (isLetter(char)) {
            freqCounter[char] = 1;
        }
    }
    //look up the object for odd count characters
    let count = 0;
    for (let key in freqCounter) {
        if (freqCounter[key] % 2 !== 0) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
}

function isLetter(char) {
    return char.length && char.match(/[a-z]/i);
}
