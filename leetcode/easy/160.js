// Runtime: 80ms => 90.5%
// Memory: 43MB => 27.27%

const getIntersectionNode = (headA, headB) => {
    let tailA = headA;
    let tailB = headB;
    let lengthA = 0;
    let lengthB = 0;
    
    while (tailA && tailA.next) {
        tailA = tailA.next;
        lengthA++;
    }
    while (tailB && tailB.next) {
        tailB = tailB.next;
        lengthB++;
    }
    
    if (tailA !== tailB) {return null;}
    if (lengthA > lengthB) {
        let diff = lengthA - lengthB;
        while (diff) {
            headA = headA.next;
            diff--;
        }
    } else if (lengthB > lengthA) {
        let diff = lengthB - lengthA;
        while (diff) {
            headB = headB.next;
            diff--;
        }
    }
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

// map version => NOT constant memory

// O(n)/O(1) version
// Runtime: 76ms => 96%
// Memory: 42.7MB => 72%

const getIntersectionNode = (headA, headB) => {
    let a = headA;
    let b = headB;
    
    if (a == null || b == null) {return null;}
    
    while (a != b) {
        if (!a) {
            a = headB;
        } else {
            a = a.next;
        }
        
        if (!b) {
            b = headA;
        } else {
            b = b.next;
        }
    }
    
    return a;
};
