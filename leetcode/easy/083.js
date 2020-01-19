// Runtime: 72ms => 42%
// Memory: 36.6MB => 53%

const deleteDuplicates = (head) => {
    let pointer = head;
    let helper = pointer;
    while (pointer) {
        if (pointer.val === helper.val) {
            pointer = pointer.next;
            helper.next = pointer;
        } else {
            pointer = pointer.next;
            helper = helper.next;
        }
    }
    return head;
};

// cleaner solution
const deleteDuplicates = (head) => {
    let pointer = head;
    while (pointer && pointer.next) {
        if (pointer.val == pointer.next.val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }
    return head;
};
