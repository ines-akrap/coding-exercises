// Runtime: 295ms => 10%
// Memory: 40.5MB => 80%

const licenseKeyFormatting = (S, K) => {
    S = S.split('-').join('').toUpperCase().split('');
    let i = S.length % K || K;
    while(i<S.length) {
        S.splice(i, 0, '-');
        i = i + K + 1;
    }
    return S.join('');
};
