// input: string
// output: boolean 
// not limited to dictionary words
// check if given string is a permutation of a palindrome

const isPalindromePermutation = (string) => {
  const letterMap = {};
  string = string.split(' ').join('').toLowerCase();
  for (let letter of string) {
    if (Object.keys(letterMap).includes(letter)) {
      letterMap[letter] = letterMap[letter] + 1;
    } else {
      letterMap[letter] = 1;
    }
  }

  let odd = 0;
  for (let value of Object.values(letterMap)) {
    if (value % 2 !== 0) {
      odd++;
    }
  }

  return odd < 2;
}

// TESTS
console.log(isPalindromePermutation('Tact coa'), 'true');
console.log(isPalindromePermutation('Ana voli milovana'), 'true');
console.log(isPalindromePermutation('Ines'), 'false');