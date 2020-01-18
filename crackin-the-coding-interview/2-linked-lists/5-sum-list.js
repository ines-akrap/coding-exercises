// 2 numbers represented by linked list where each node contains a single digit
// digits are stored in the reversed order
// return sum as linked list

const addTwoNumbers = (l1, l2) => {
    const sum = new ListNode();
    let head = sum;
    let digitSum = 0;
    while (l1 || l2) {
        if (l1) {
            digitSum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            digitSum += l2.val;
            l2 = l2.next;
        }
        const newNode = new ListNode(digitSum % 10);
        head.next = newNode;
        head = head.next;
        if (digitSum > 9) {
            digitSum = 1;
        } else {
            digitSum = 0;
        }
    }
    if (digitSum) {
        const newNode = new ListNode(digitSum);
        head.next = newNode;
    }  
    return sum.next;
};

// digits stored in forward order
const addTwoNumbers = (l1, l2) => {
    const stack1 = [];
    const stack2 = [];
    const stackResult = [];
    
    while(l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    let carry = 0;
    while(stack1.length || stack2.length) {
        let sum = carry;
        if (stack1.length) {
            sum += stack1.pop();
        }
        if (stack2.length) {
            sum += stack2.pop();
        }
        carry = (sum > 9) ? 1 : 0;
        stackResult.push(sum % 10);
    }
    if (carry) {stackResult.push(carry);}
    const resultList = new ListNode(stackResult.pop());
    let head = resultList;
    while (stackResult.length) {
        const newNode = new ListNode(stackResult.pop());
        head.next = newNode;
        head = head.next;
    }
    
    return resultList;
};
