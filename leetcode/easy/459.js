// Runtime: 912ms => 11%
// Memory: 42.7MB => 33%

const repeatedSubstringPattern = (s) => {
    if (s.length < 2) {return false;}
    for (let i=1; i <= s.length/2; i++) {
        const substring = s.substr(0,i);
        if (s.split(substring).join('') === '') {return true;}
    }
    return false;
};

// Runtime: 56ms => 96.72%
// 36.2MB => 100%

const repeatedSubstringPattern = (s) => {
    return (s + s).slice(1, s.length * 2 - 1).includes(s);
};
