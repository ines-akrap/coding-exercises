// Runtime: 48ms => 91.79%
// Memory: 33.7MB => 68%

const numTrees = (n, map={0:1, 1:1, 2:2}) => {
    if(map[n]) {return map[n];}
    let counter = 0;
    for (let i=0; i<n; i++) {
        counter += numTrees(n-i-1, map) * numTrees(i, map);
    }
    return map[n] = counter;
}
