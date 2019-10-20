// Runtime: 48ms -> 94.88%
// Memory: 34.5MB -> 100% 

const balancedStringSplit = (s) => {
    let balanced = 0;
    let counter = 0;
    for (let i = 0; i<s.length; i++) {
        if (s[i] === 'L') {
            counter++;
        } else {
            counter--;
        }
        if (counter === 0) {
            balanced++;
        }
    }
    return balanced;
};