// Runtime: 48ms => 99.73%
// Memory: 35.8MB => 16.67%

const deleteNode = (node) => {
    if (node === null || node.next === null) {return;}
    node.val = node.next.val;
    node.next = node.next.next;
};