// Q: ASCII or unicode 

const isUnique = (string) => {
  let letters = [];
  for (let index in string) {
    if (letters.indexOf(string[index]) === -1) {
        letters.push(string[index]);
    } else {
        return false;
    }  
  }
  return true;  
}

// no additional data structure, O(n2)
const isUnique2 = (string) => {
    for (let i=0; i<string.length; i++) {
        for (let j=i+1; j<string.length; j++) {
            if (string[i] === string[j]) {
                return false;
            }
        }
    }
    return true;
}

// TESTS
console.log(isUnique2('abcdefghIJKlmnop'), 'true');
console.log(isUnique2('aabbccddee'), 'false');