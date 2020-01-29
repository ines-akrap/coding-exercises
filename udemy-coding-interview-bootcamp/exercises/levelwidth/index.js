// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const count = [0];
    const queue = [root,'S'];
    while(queue.length > 1) {
        const node = queue.shift();
        if (node === 'S') {
            count.push(0);
            queue.push(node);
            continue;
        }
        queue.push(...node.children);
        count[count.length-1]++;
    }
    return count;
}

module.exports = levelWidth;
