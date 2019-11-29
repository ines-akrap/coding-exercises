// Runtime: 60ms => 79%
// Memory: 37MB => 62%

const maxDepth = (root) => {
    if (!root) {return 0;}
    return Math.max(maxDepth(root.left), maxDepth(root.right)) +1;
};

