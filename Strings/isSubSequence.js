function isSubsequence(s1, s2) {
    // good luck. Add any arguments you deem necessary.
    let s1p = 0;
    for(let i = 0; i < s2.length; i += 1) {
        if(s1[s1p] === s2[i]) {
            s1p++;
        }
       if(s1p >= s1.length) {
           return true;
        }
    }
    return false;
  }