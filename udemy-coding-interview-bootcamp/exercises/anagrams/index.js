// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagramsS1(stringA, stringB) {
    const mapA = buildMap(stringA);
    const mapB = buildMap(stringB);

    const keysA = Object.keys(mapA);
    const keysB = Object.keys(mapB);
    if (keysA.length !== keysB.length) {return false;}
    return keysA.every((key) => mapA[key] === mapB[key]);
}

function buildMap(string) {
    const map = {};
    for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
        map[char] = map[char] + 1 || 1;
    }
    return map;
}

function anagramsS0(stringA, stringB) {
    // can string be empty ? return early if yes
    const mapA = {};
    for (let i=0; i<stringA.length; i++) {
        if (!isCharacter(stringA[i])) {continue;}
        mapA[stringA[i]] = mapA[stringA[i]] + 1 || 1;
    }

    const mapB = {};
    for (let i=0; i<stringB.length; i++) {
        if (!isCharacter(stringB[i])) {continue;}
        mapB[stringB[i]] = mapB[stringB[i]] + 1 || 1;
    }

    const keysA = Object.keys(mapA);
    const keysB = Object.keys(mapB);
    if (keysA.length !== keysB.length) {return false;}
    return keysA.every((key) => mapA[key] === mapB[key]);
}

// ask if numbers ? 
// use REGEX if you know
function isCharacter(char) {
    return char >= 'a' && char <= 'z';
}

module.exports = anagrams;
