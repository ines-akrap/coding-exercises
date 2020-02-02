// Runtime: 56ms => 85%
// Memory: 34MB => 20%

const removeNthFromEnd = (head, k) => {
    let fast = head;
    let slow = head;
    let previous = head;
    let counter = 0;
    let distance = 0;

    if (k===0) {return head;}

    while (fast) {
        if (distance < k) {
            distance++;
        } else if (distance === k) {
            previous = slow;
            slow = slow.next;
        }
        fast = fast.next;
        counter++;
    }

    if (k===counter) {
        return head.next;
    }

    previous.next = slow.next;

    return head;
}
