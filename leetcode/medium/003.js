// Runtime: 464ms => 13%
// Memory: 41.7MB => 25.6%

const lengthOfLongestSubstring = (s) => {
    if (s.length === 0) {return 0};
    let max = 1;
    let i = 1;
    const sub = [s[0]];
    while (i<s.length) {
        let index = sub.indexOf(s[i]);
        if (index === -1) {
            sub.push(s[i]);
            i++;
        } else {
            max = Math.max(max, sub.length);
            i = i - sub.length + index + 1;
            sub.length = 0;
        }
    }
    if (sub.length) {max = Math.max(max, sub.length);}
    return max;
};

// Runtime: 72ms => 98.77%
// Memory: 41.8MB => 24%

const lengthOfLongestSubstring = (s) => {
    if (s.length === 0) {return 0};
    let max = 1;
    let i = 1;
    let sub = [s[0]];
    while (i<s.length) {
        let index = sub.indexOf(s[i]);
        if (index === -1) {
            sub.push(s[i]);
        } else {
            max = Math.max(max, sub.length);
            sub = sub.slice(index+1);
            sub.push(s[i]);
        }
        i++;
    }
    if (sub.length) {max = Math.max(max, sub.length);}
    return max;
};