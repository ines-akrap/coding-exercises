// Runtime: 60ms => 88.6%
// Memory: 35.5MB => 92.30%

const mergeTwoLists = (l1, l2) => {
    if (!l1) {return l2;}
    if (!l2) {return l1;}
    if (!(l1 && l2)) {return null;}
    
    let head1 = l1;
    let head2 = l2;
    let current;
    let newList;
    
    if (head1.val < head2.val) {
        newList = head1;
        current = head1;
        head1 = head1.next;
    } else {
        newList = head2;
        current = head2;
        head2 = head2.next;
    }
    
    while (head1 && head2) {
        if (head1.val < head2.val) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }
        current = current.next;
    }
    
    if (head1) {
        current.next = head1;
    } else if (head2) {
        current.next = head2;
    }
    
    return newList;
};

// Same perf only cleaner
const mergeTwoLists = (l1, l2) => {
    const newList = new ListNode();
    let current = newList;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) { 
          current.next = l1;
          l1 = l1.next;
        } else {
          current.next = l2;
          l2 = l2.next;
        }
        current = current.next;
    }
    
    if (l1) { current.next = l1; }
    if (l2) { current.next = l2; }
    return newList.next;
};
