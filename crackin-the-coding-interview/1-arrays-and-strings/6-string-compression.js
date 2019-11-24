// basic string compression, using counts of repeated characters

const stringCompression = (string) => {
    let newString = string[0];
    let counter = 1;
    for (let i=1; i < string.length; i++) {
        if (string[i] === newString[newString.length - 1]) {
            counter++;
        } else {
            newString = newString + counter + string[i];
            counter = 1;
        }
    }
    newString = newString + counter;

    return (newString.length < string.length ? newString : string);
}

// TESTS 
console.log(stringCompression('aabcccccaaa'), 'a2b1c5a3');
console.log(stringCompression('abcd'), 'abcd');
console.log(stringCompression('aabcccccaaad'), 'a2b1c5a3d1');