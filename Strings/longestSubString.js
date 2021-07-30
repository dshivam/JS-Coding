// rithmschool
// thisisawesome
function findLongestSubstring(string) {
    let pLeft = 0;
    let pRight = 0;
    let fc = {};
    let subStrLen = 0;
    let maxLen = 0;
    // loop until i get a repeating char
    while (pRight < string.length) {
        if (!fc[string[pRight]]) {
            fc[pRight++] = i + 1;
        }
    }
    if (pRight === string.length) {
        return pRight;
    }
    subStrLen = maxLen = pRight - pLeft;
    pLeft


}
