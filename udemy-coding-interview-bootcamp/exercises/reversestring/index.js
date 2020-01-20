// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

function reverseS0(str) {
    const result = [];
    for (let i=str.length-1; i>=0; i--) {
        result.push(str[i]);
    }
    return result.join('');
}

function reverseS1(str) {
    return str.split('').reverse().join('');
}

function reverseS2(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + 'reversed';
    }
    return reversed;
}

module.exports = reverse;
