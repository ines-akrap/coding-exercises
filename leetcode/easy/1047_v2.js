// V2: stack solution
// Runtime: 72ms -> 84%
// Memory: 42.7MB -> 100%

const removeDuplicates = (S) => {
  const stack = [S[0]];
  let i = 1;
  while (i<S.length) {
    if (stack[stack.length -1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
    ++i;
  }
  return stack.join('');
}
