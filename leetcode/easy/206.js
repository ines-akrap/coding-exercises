// Runtime: 48ms => 99.31%
// Memory: 35.7MB => 15%

const reverseList = (head) => {
    let reversed = null;
    while (head) {
        const tempNode = new ListNode(head.val);
        tempNode.next = reversed;
        reversed = tempNode;
        head = head.next;
    }
    return reversed;
}

// memory improvement
const reverseList = (head) => {
    let reversed = null;
    while (head) {
        let next = head.next;
        head.next = reversed;
        reversed = head;
        head = next;
    }
    return reversed;
}
