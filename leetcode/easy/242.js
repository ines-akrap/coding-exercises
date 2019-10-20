// Runtime: 100ms -> 34%
// Memory: 38MB -> 30.60%
const isAnagram = (s, t) => {
    if (s.length != t.length) {return false;}
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    if (sortedS === sortedT) {return true;}
    return false;
};