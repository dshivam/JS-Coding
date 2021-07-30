//'anagram' 'maganar'

// {a: 3, n: 1, g: 1, m: 1, r: 1}

function isValidAnagram(str1, str2) {
    //equal string return true
    if (str1 === str2) {
        return true
    }
    //unequal length return false 
    if (str1.length !== str2.length) {
        return false
    }
    //logic
    const fCount1 = {};
    const fCount2 = {};
    //count frequency of each letter for both store in two objs
    for (let i = 0; i < str1.length; i += 1) {
        const char = str1[i];
        const char2 = str2[i];
        if (fCount1[char]) {
            fCount1[char]++;
        } else {
            fCount1[char] = 1
        }
        if (fCount2[char2]) {
            fCount2[char2]++;
        } else {
            fCount2[char2] = 1
        }
    }
    console.log(fCount2, fCount1);

    if (Object.keys(fCount1).length !== Object.keys(fCount2).length) {
        return false;
    }
    // compare keys of two objs
    for (let key in fCount1) {
        if (!fCount2[key] || fCount2[key] !== fCount1[key]) {
            return false
        }
    }
    return true;

}

const s1 = 'anagram';
const s2 = 'magbnar'

console.log(isValidAnagram(s1,s2))