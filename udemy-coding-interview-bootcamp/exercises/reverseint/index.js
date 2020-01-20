// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')
    return Math.sign(n) * parseInt(reversed);
}

function reverseIntS0(n) {
    if (n === 0) { return 0;}
    const sign = Math.sign(n);
    const nString = n.toString();
    const num = []
    for (let i=nString.length-1; i>=0; i--) {
        if (nString[i] === '0' && num.length === 0) {
            continue;
        } else if (nString[i] === '-') {
            continue;
        }
        num.push(nString[i]);
    }
    return sign * parseInt(num.join(''));
}

module.exports = reverseInt;
