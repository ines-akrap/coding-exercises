// Dynamic

const numDecodings = (s) => {
    if (s.length && s[0] === '0') {return 0;}
    if (s.length < 2) {return 1;}
    if (s[0]==='1' || (s[0]==='2' && parseInt(s[1])<7)) {
        return numDecodings(s.slice(1)) + numDecodings(s.slice(2));
    }
    return numDecodings(s.slice(1));
};
