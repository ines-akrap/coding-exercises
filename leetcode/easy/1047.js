// Runtime: 80ms -> 60%
// Memory: 42.9MB -> 100%

const removeDuplicates = (S) => {
    let newString = S;
    let i=1;
    while (i<newString.length) {
      if (newString[i-1] === newString[i]) {
        newString = newString.substring(0, i-1) + newString.substring(i+1, newString.length);
        i = i-1;
      } else {
        i = i+1;
      }
    };
    return newString;
  };