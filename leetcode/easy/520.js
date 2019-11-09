// Runtime: 72ms -> 17.48%
// Memory: 34.2MB -> 100%


const detectCapitalUse = (word) => {
    if (word.length === 1) return true;
    const isFirstCapital = word[0] == word[0].toUpperCase();
    const isSecondCapital = word[1] == word[1].toUpperCase();
    let nextShouldBeCapital = false;
  
    if (!isFirstCapital && isSecondCapital) {
      return false;
    }
  
    if (isFirstCapital && isSecondCapital) {
      nextShouldBeCapital = true;
    }
    
    for (let i=2; i<word.length; i++) {
      if ((word[i] == word[i].toUpperCase()) && !nextShouldBeCapital) {
        return false;
      } else if ((word[i] == word[i].toLowerCase()) && nextShouldBeCapital) {
        return false;
      }
    }
    return true;
};


// ALTERNATIVE

const detectCapitalUse = (word) => {
    return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};