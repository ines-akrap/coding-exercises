// Runtime: 132ms -> 57.5%
// Memory: 45.6MB -> 34.7%

const groupAnagrams = (strs) => {
    const groupedAnagrams = {};
    for (let i=0; i<strs.length; i++) {
        const key = getKey(strs[i]);
        if (groupedAnagrams[key]) {
           groupedAnagrams[key].push(strs[i]);
        } else {
          groupedAnagrams[key] = [strs[i]];
        }
    }
    return Object.values(groupedAnagrams);
};

const getKey = (str) => [...str].sort().join('');