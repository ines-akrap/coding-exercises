// input:the node c from the linked list a->b->c->d->e->f 
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f

const deleteMiddleNode = (node) => {
    if  (node === null || node.next === null)  {return false;} 
    node.val = node.next.val;
    node.next = node.next.next;
    return true;
}
