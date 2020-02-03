// Runtime: 52ms => 90%
// Memory:33.8MB => 75%

const repeatedStringMatch = (A, B) => {
    let m = Math.ceil(B.length / A.length);
    let repeated = A.repeat(m);
    if (repeated.includes(B)) {
        return m;
    } else if ((repeated + A).includes(B)) {
        return m+1;
    } else {
        return -1;
    }
};
