// is one string permutation of other
// case sensitive ??

// sort and compare approach
// case sensitive
const checkPermutation = (string1, string2) => {
    if (string1.length !== string2.length) {return false;}
    return [...string1].sort().toString() == [...string2].sort().toString();
}

// sort and compare approach
// not case sensitive
const checkPermutation1 = (string1, string2) => {
    if (string1.length !== string2.length) {return false;}
    return [...string1.toLowerCase()].sort().toString() == [...string2.toLowerCase()].sort().toString();
}

// TESTS
console.log(checkPermutation('ines','ines'), 'true');
console.log(checkPermutation('Ines', 'ines'), 'false');
console.log(checkPermutation('ines','iness'), 'false');

console.log(checkPermutation1('Ines', 'ines'), 'true');