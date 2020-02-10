// Implement a queue using two stacks

class MyQueue {
    constructor() {
        this.stackNewest = [];
        this.stackOldest = [];
    }

    size() {
        return this.stackNewest.length + this.stackOldes.length;
    }

    add(value) {
        this.stackNewest.push(value);
    }

    shiftStacks() {
        if(this.stackOldest.length) { return; }
        while (this.stackNewest.length) {
            this.stackOldest.push(this.stackNewest.pop());
        }
    }

    peek() {
        if (!this.stackOldest.length) {
            this.shiftStacks();
        }
        return this.stackOldest[this.stackOldest.length-1];
    }

    remove() {
        if (!this.stackOldest.length) {
            this.shiftStacks();
        }
        return this.stackOldest.pop();
    }
}

// TESTING
const queue = new MyQueue();
for (let i=0; i<10; i++) {
    queue.add(i);
}
console.log(queue);
console.log(queue.peek());
console.log(queue.remove());
console.log(queue.peek());
console.log(queue.add(10));
console.log(queue.peek());