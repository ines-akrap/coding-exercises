// Runtime: 64ms => 70%
// Memory: 36.9MB => 87.5%

const diameterOfBinaryTree = () => {
    let diameter = 0;
    dfs(root);

    function dfs(node) {
        if (!node) {return 0;}

        const left = dfs(node.left);
        const right = dfs(node.right);

        diameter = Math.max(diameter, left+right);
        return Math.max(left, right) +1;
    }
    return diameter;
}
