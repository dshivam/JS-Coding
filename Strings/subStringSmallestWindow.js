// Given two strings string1 and string2, the task is to find the smallest substring in 
// string1 containing all characters of string2 efficiently.

const f = (s, p) => {
  if (s.length < p.length) {
    return 'No such window!'
  }
  const p_obj = {};
  const s_obj = {};
  let count = 0;
  let start = 0;
  for (let i = 0; i < p.length; i += 1) {
    if (p_obj[p[i]]) {
      p_obj[p[i]]++;
    } else {
      p_obj[p[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i += 1) {
    if (s_obj[s[i]]) {
      s_obj[s[i]]++;
    } else {
      s_obj[s[i]] = 1;
    }
    if (p_obj[s[i]] && (s_obj[s[i]] <= p_obj[s[i]])) {
      count++;
    }
    if (count === p.length) {

    }
  }
}