// Runtime: 48ms ->85%
// Memory: 34MB ->20%

const toLowerCase = (str) => {
    return String.fromCharCode(...str.split('').map((letter) => {
        const char = letter.charCodeAt(0);
        return (char >= 65 && char <= 90) ? char+32 : char
    }))
};