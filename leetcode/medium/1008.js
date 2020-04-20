// Runtime: 52ms => 90%
// Memory: 36.4MB => 40%

const bstFromPreorder = (preorder) => {
    if (!preorder.length) {return null};

    const [rootValue, ...nodes] = preorder;
    const root = new TreeNode(rootValue);
    root.left = bstFromPreorder(nodes.filter((val) => val<rootValue));
    root.right = bstFromPreorder(nodes.filter((val) => val>rootValue));

    return root;
};
