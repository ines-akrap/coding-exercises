// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let string = str[0].toUpperCase(); // WHAT IF STRING IS SPANISH ?? 
    for (let i=1; i<str.length; i++) {
        if (str[i-1] === ' ') {
            string = string + str[i].toUpperCase();
        } else {
            string = string + str[i];
        }
    }
    return string;
}

// PREFFERED !!!
function capitalizeS0(str) {
    const array = [];
    str.split(' ').forEach((word) => {
        array.push(word.slice(0,1).toUpperCase() + word.slice(1));
    });
    return array.join(' ');
}

module.exports = capitalize;
