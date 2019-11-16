// remove duplicates from unsorted linked list
// how would you do it without temp buffer ?

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
  removeDuplicates() {
    let currentNode = this.head;
    let nextNode = currentNode.next;
    const values = [currentNode.value];
    while (nextNode) {
        if (values.includes(nextNode.value)) {
          currentNode.next = nextNode.next;
          nextNode = nextNode.next;
          continue;
        }
        values.push(currentNode.value);
        currentNode = currentNode.next;
        nextNode = nextNode.next;
    }
    return this.head;
  }
}

// TESTS 
const list = new LinkedList();
list.insertEnd(5);
list.insertEnd(4);
list.insertEnd(3);
list.insertFront(5);
list.insertEnd(1);
list.insertEnd(2);
list.insertEnd(3);
list.insertEnd(5);
console.log(list);
list.removeDuplicates();
console.log(list);