// Runtime: 52ms => 95.93%
// Memory: 37.5MB => 100%

const mostCommonWord = (paragraph, banned) => {
    const map = {};
    paragraph.match(/\b(\w+)\b/g).forEach((word) => {
       word = word.toLowerCase();
        map[word] = map[word] + 1 || 1;
    });
    let words = Object.keys(map).filter((word) => { return banned.indexOf(word) === -1});
    words = words.sort((a,b) => {return map[b]-map[a]});
    return words[0];
};
