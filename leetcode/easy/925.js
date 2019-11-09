// Runtime: 52ms -> 86.75%
// Memory: 33.9MB -> 100%

const isLongPressedName = (name, typed) => {
    let cleanedName = name[0];
    let currentNameIndex = 1;
    for (let i=1; i<typed.length; i++) {
      if (typed[i] === name[currentNameIndex]) {
        currentNameIndex++;
        cleanedName += typed[i];
      } else if (typed[i] === typed[i-1]) {
        continue;         
      } else {
        return false;
      }
    }
    return cleanedName === name;
};
