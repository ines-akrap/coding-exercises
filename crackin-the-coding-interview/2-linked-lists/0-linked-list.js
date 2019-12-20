class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFront(value) {
        let newNode = new Node(value, this.head);
        this.head = newNode;
        return this.head;
    }
    insertEnd(value) {
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            return this.head;
        }
        
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return this.head;
    }
    getValues() {
        const values = [];
        let currentNode = this.head;
        while (currentNode.next !== null) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return values;
    }
}