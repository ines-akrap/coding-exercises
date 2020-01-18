// Runtime: 112ms => 83%
// Memory: 38.9MB => 33.33%

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

// 1 less loop and stack version
// Runtime: 108ms => 90.91%
// Memory: 38.5MB => 66.67%

const addTwoNumbers = (l1, l2) => {
    const stack1 = [];
    const stack2 = [];
    
    while(l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    let carry = 0;
    let resultList = 0;
    while(stack1.length || stack2.length) {
        let sum = carry;
        if (stack1.length) {
            sum += stack1.pop();
        }
        if (stack2.length) {
            sum += stack2.pop();
        }
        carry = (sum > 9) ? 1 : 0;
        const newNode = new ListNode(sum % 10);
        if (resultList) {
            newNode.next = resultList;
            resultList = newNode;
        } else {
            resultList = newNode;
        }
    }
    if (carry) {
        const newNode = new ListNode(carry);
        newNode.next = resultList;
        resultList = newNode;  
    };
    
    return resultList;
};
