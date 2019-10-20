// Time limit eceeded

const findAnagrams = (s, p) => {
    const indexes = [];
    const pSorted = stringSort(p);
    for (let i=0; i<=(s.length - p.length); i++) {
        const substring = s.substring(i, i+p.length);
        if (stringSort(substring) === pSorted) {
            indexes.push(i);
        }
    }
    return indexes;
};
         
const stringSort = (s) => {
    return [...s].sort().join('');
}