// Runtime: 40ms => 100%
// Memory: 33.9MB => 33.33%

// 2 pointer solution: O(n), O(1)
const middleNode = (head) => {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
