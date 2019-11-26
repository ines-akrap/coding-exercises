// Runtime: 88ms
// Memory: 42.9MB

const validPalindrome = (s, deleted = false) => {
    for (let start = 0, end = s.length - 1; start < end; start++, end--) {
    if (s[start] !== s[end]) {
      if (deleted) {return false;}
      return validPalindrome(s.substring(start, end), true) || validPalindrome(s.substring(start + 1, end + 1), true);
    }
  }
  return true;
};
