// Brute force
// Runtime: 2092ms => 10%
// Memory: 41.8MB => 100%

const totalFruit = (tree) => {
    let max = 0;
    for (let i=0; i<tree.length; i++) {
        let counter = 1;
        let tree1 = tree[i];
        let tree2;
        for (let j=i+1; j<tree.length; j++) {
            if (tree[j] === tree1) {
                counter++;
            } else if (tree2 !== undefined && tree[j] === tree2) {
                counter++;
            } else if (tree2 === undefined) {
                tree2 = tree[j];
                counter++;
            } else {
                break;
            }
        }
        max = Math.max(max, counter);
    }
    return max;
};

