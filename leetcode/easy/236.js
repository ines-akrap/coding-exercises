// Runtime: 60ms => 87%
// Memory: 39.7MB => 66.67%

const isPalindrome = (head) => {
    if (head === null || head.next === null) {return true;}
    let slow = head;
    let fast = head;
    const stack = [];
    while (fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    while(slow) {
        if (fast) {
            slow = slow.next;
            fast = fast.next;
        }
        if (stack.length && (slow.val !== stack.pop())) {return false;}
        slow = slow.next;
    }
    return true;
};

// reverse then compare
// Runtime: 64ms => 69.83%
// Memory: 40.6MB => 33.33%
const isPalindrome = (head) => {
    if (head === null || head.next === null) {return true;}
    let reversed = reverseList(head);
    while (head) {
        if (head.val !== reversed.val) {return false;}
        reversed = reversed.next;
        head = head.next;
    }
    return true;
};

const reverseList = (listHead) => {
    let reversed = null;
    while (listHead) {
        const tempNode = new ListNode(listHead.val);
        tempNode.next = reversed;
        reversed = tempNode;
        listHead = listHead.next;
    }
    return reversed;
}

// reverse, compare half
// Runtime: 64ms => 70%
// Memory: 40.6MB => 33.33%

const isPalindrome = (head) => {
    if (head === null || head.next === null) {return true;}
    let reversed = reverseList(head);
    let fast = head;
    while (fast && fast.next) {
        if (head.val !== reversed.val) {return false;}
        reversed = reversed.next;
        head = head.next;
        fast = fast.next.next;
    }
    return true;
};

const reverseList = (listHead) => {
    let reversed = null;
    while (listHead) {
        const tempNode = new ListNode(listHead.val);
        tempNode.next = reversed;
        reversed = tempNode;
        listHead = listHead.next;
    }
    return reversed;
}
