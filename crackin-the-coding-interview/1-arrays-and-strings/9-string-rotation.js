// check if s2 is rotation of s1 only using isSubstring

const isSubstring = (s1, s2) => {
    return s1.includes(s2);
}

const stringRotation = (s1, s2) => {
    return isSubstring( s1+s1, s2);
}

// TESTS
console.log(stringRotation('waterbottle', 'erbottlewat'), 'true');
console.log(stringRotation('ines', 'esin'), 'true');
console.log(stringRotation('waterbottle', 'bottleerwat'), 'false');
