// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = {};
    str.split('').forEach((char) => {
        map[char] = map[char] + 1 || 1;    
    });
    let maxOccurency = 0;
    let resultChar;
    Object.keys(map).forEach((key) => {
        if (map[key] > maxOccurency) {
            maxOccurency = map[key];
            resultChar = key;
        }
    });
    return resultChar;
}

module.exports = maxChar;
