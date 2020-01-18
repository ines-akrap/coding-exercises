const addTwoNumbers = (l1, l2) => {
    let sum = (l1 && l1.val) + (l2 && l2.val);
    let digit = sum % 10;
    let carry = Math.floor(sum / 10);
    const newList = new ListNode(digit);
    let head = newList;
    l1 = l1.next;
    l2 = l2.next;
    while (l1 !== null || l2 !== null || carry) {
        sum = (l1 && l1.val) + (l2 && l2.val) + carry;
        digit = sum % 10;
        carry = Math.floor(sum / 10);
        head.next = new ListNode(digit);
        head = head.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    head.next = null;
    return newList;
};