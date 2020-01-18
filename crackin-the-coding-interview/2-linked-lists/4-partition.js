// partition a linked list around a value x

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const partitionList = (x, head) => {
    const before = new Node();
    const after = new Node();
    let pointBefore = before;
    let pointAfter = after;
    
    while (head) {
        if (head.val < x) {
            pointBefore.next = head;
            pointBefore = pointBefore.next;
        } else {
            pointAfter.next = head;
            pointAfter = pointAfter.next;
        }
        head = head.next;
    }

    pointBefore.next = pointAfter.next;
    pointAfter.next = null;
    return before.next;
}
