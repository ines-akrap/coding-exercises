// when stack exceedes some given size, we start a new one

class StackOfStacks {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stacks = [[]];
    }

    push(value) {
        let lastStackIndex = this.stacks.length - 1;
        if (this.stacks[lastStackIndex].length === this.maxSize ) {
            this.stacks.push([]);
            lastStackIndex++;
        }
        this.stacks[lastStackIndex].push(value);
    }

    pop() {
        const lastStackIndex = this.stacks.length - 1;
        const value = this.stacks[lastStackIndex].pop();
        if (this.stacks[lastStackIndex].length === 0) {
            this.stacks.pop();
        }
        return value;
    }

    popAt(stackIndex) {
        const lastStackIndex = this.stacks.length - 1;
        // if(stackIndex > lastStackIndex) {return null;}
        //     => what to return if stackIndex is higher ?
        if (stackIndex === lastStackIndex) {
            return this.pop();
        }

        // if in the middle, once stack is popped we have to shift first item of each stack to stack before
        const poppedValue = this.stacks[stackIndex].pop();
        while (stackIndex < lastStackIndex) {
            this.shiftLeft(stackIndex, stackIndex+1);
            stackIndex++;
        }
        // check if last is empty
        if (this.stacks[lastStackIndex].length === 0) {
            this.stacks.pop();
        }
        return poppedValue;
    }

    shiftLeft(stackIndex1, stackIndex2) {
        const value = this.stacks[stackIndex2].shift();
        this.stacks[stackIndex1].push(value);
    }
}

// TESTS
const plates = new StackOfStacks(3);
console.log(plates);
for (let i=0; i<10; i++) {
    plates.push(i);
}
console.log(plates);
plates.pop();
plates.pop();
console.log(plates);
plates.popAt(2);
plates.popAt(0);