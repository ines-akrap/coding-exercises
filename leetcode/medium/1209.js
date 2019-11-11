// Runtime: 7856 ms -> 5.20%
// Memory: 38MB -> 100%

const removeDuplicates = (s, k) => {
  const stack = [s[0]];
  for (let i = 1; i<s.length; i++) {
    if (stack.length < k-2 || stack[stack.length - 1] !== s[i]) {
        stack.push(s[i]);
        continue;
    }
    // just 2 equals case  
    if (k === 2) {
        stack.pop();
        continue;
    }
    // k>2 case, 2 already equal
    let counter = 2;
    for (let j = 2; j<k; j++) {
        if (stack[stack.length - j] !== s[i]) { break; }
        counter++;
    }
    if (counter === k) {
        while (counter > 1) {
            stack.pop();
            counter--;
        }
      continue;
    }
    stack.push(s[i]);
  }
  return stack.join('');
};