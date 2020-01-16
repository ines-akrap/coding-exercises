// Runtime: 60ms => 63%
// Memory: 34.2MB => 100%

const partition = (head, x) => {
    const before = new ListNode();
    const after = new ListNode();
    let less = before;
    let more = after;
    while (head) {
        if (head.val < x) {
            less = less.next = head;
        } else {
            more = more.next = head;
        }
        head = head.next;
    }
    less.next = after.next;
    more.next = null;
    return before.next;
};

