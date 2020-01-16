// algorithm to find k-th lo last element of a singly linked list
// iterative approach with 2 pointers : O(k) time, O(1) space

const kthToLast = (head, k) => {
    console.log(head);
    let p1 = head;
    let p2 = head;
    
    for (let i=0; i<k; i++) {
        if (!p1.next) {return null;}
        p1 = p1.next;
    }

    while (p1.next) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2;
}

// recursion => space O(n)
const kthToLastRecursion = (head, k) => {
    if (head === null) {return 0;}
    let index = kthToLastRecursion(head.next, k) + 1;
    if (index === k) {
        return head;
    }
}
