// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        // this.insertAt(0); !!!
        this.head = new Node(data, this.head);
    }
    size() {
        let size = 0;
        let node = this.head;
        while (node) {
            node = node.next;
            size++;
        }
        return size;
    }
    getFirst() {
        // this.getAt(0) !!!
        return this.head;
    }
    getLast() {
        let node = this.head;
        while (node && node.next) {
            node = node.next;
        }
        return node;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) {return;}
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let node = this.head;
        while (node && node.next && node.next.next) {
            node = node.next;
        }
        node.next = null; 
    }
    insertLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let node = this.head;
        while (node && node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
    getAt(nodeIndex) {
        let node = this.head;
        while (nodeIndex) {
            if (!node) {return null;}
            node = node.next;
            nodeIndex--;
        }
        return node;
    }
    removeAt(nodeIndex) {
        if (!this.head) {return;}
        if (nodeIndex === 0) {
            this.head = this.head.next;
        }
        const previous = this.getAt(nodeIndex-1);
        if (!previous) {return;}
        if (previous.next) {
            previous.next = previous.next.next;
        }
    }
    insertAt(data, nodeIndex) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (nodeIndex === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const previous = this.getAt(nodeIndex-1) || this.getLast();
        previous.next = new Node(data, previous.next);
    }
    forEach(funct) {
        let node = this.head;
        while (node) {
            funct(node);
            node = node.next;
        }
    }

    // for ... of => generator function
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
