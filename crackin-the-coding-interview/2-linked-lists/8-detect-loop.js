// given a circular linked list, return beginning node

const detectLoop = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            break;
        }
    }

    if (fast === null || fast.next === null) {
        return null;
    }
    
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
}
