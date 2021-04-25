const removeDuplicate = (s) => {
  const ifExist = {};
  let s1 = '';
  for (let i = 0; i < s.length; i += 1) {
    if (!ifExist[s[i]]) {
      s1 += s[i];
      ifExist[s[i]] = 1;
    }
  }
  return s1;
}

console.log(removeDuplicate('abcdgsfvawcxscxfcaaaa'));