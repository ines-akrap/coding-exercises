// Runtime: 84ms => 8%
// Mamory: 38MB => 20%

const longestPalindrome = (s) => {
    const letterMap = {};
    letterMap[s[0]] = 1;
    for (let i=1; i<s.length; i++) {
        if (Object.keys(letterMap).includes(s[i])){
           letterMap[s[i]]++; 
        } else {
           letterMap[s[i]] = 1; 
        }
    }
    let length = 0;
    let hasOdd;
    for (let value of Object.values(letterMap)) {
        if (value % 2 === 0) {
            length += value;
        } else {
            length += (value - 1);
            hasOdd = true;
        }
    }
    if (hasOdd) {length++};
    return length;
};