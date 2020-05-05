// Runtime: 48ms => 98.5%
// Memory: 36.1 => 50%

const removeOuterParentheses = (S) => {
    const primitives = [];
    let currentIndex = 0;
    let left = 0;
    for (let i=0; i<S.length; i++) {
        if (S[i] === '(') {
            left++;
            continue;
        }
        if (S[i] === ')') {
            left--;
            if (left === 0) {
                primitives.push(S.substring(currentIndex, i+1));
                currentIndex = i+1;
            }
        }
    }
    return primitives.map((primitive) => primitive.substring(1,primitive.length - 1)).join('');
};
