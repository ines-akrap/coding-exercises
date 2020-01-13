// Runtime: 68ms => 94%
// Memory: 41.9MB => 87%

const reverseWords = (s) => {
    return s.split(' ').map((word) => {
        return word.split('').reverse().join('');
    }).join(' ');
};
