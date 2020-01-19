// Runtime: 60ms => 99.31%
// Memory: 37MB => 50%

const removeElements = (head, val) => {
    if (head === null) {return null;}
    let pointer = head;
    while (pointer.val === val) {
        pointer = pointer.next;
        if (pointer === null) {
            return null;
        }
    }
    head = pointer;
    while (pointer && pointer.next) {
        if (pointer.next.val === val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }
    return head;
};


