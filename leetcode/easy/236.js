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
