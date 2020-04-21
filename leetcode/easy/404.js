// Runtime: 48ms => 97.18%
// Memory: 34.2MB => 100%

const sumOfLeftLeaves = (root) => {
    let total = 0;
    
    function traverse(node, isLeft) {
        if (!node) {return null;}
        if (!node.left && !node.right && isLeft) {total += node.val}
        if (node.left) {traverse(node.left, true);}
        if (node.right) {traverse(node.right);}
    };

    traverse(root, false);
    return total;
};
