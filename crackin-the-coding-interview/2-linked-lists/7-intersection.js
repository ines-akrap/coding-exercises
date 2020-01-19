// given two singly linked lists, determin if they intersect
// ALG:
// find each end + measure => compare if equal => align => find point where they are same

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