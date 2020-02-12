// sort stack so that smallest items are on top
// allowed only one additional temp stack 

const sortStack = (stackToSort) => {
    const helpStack = [stackToSort.pop()];
    let temp;
    while(stackToSort.length) {
        temp = stackToSort.pop();
        const currentStackLength = stackToSort.length;
        while (helpStack.length) {
            if (helpStack[helpStack.length - 1] < temp) {
                break
            }
            stackToSort.push(helpStack.pop());
        }
        helpStack.push(temp);
        while (currentStackLength < stackToSort.length) {
            helpStack.push(stackToSort.pop());
        }
    }
    while (helpStack.length) {
        stackToSort.push(helpStack.pop());
    }
    return stackToSort;
}


// Test
console.log(sortStack([2,5,3,1,8,6,4,8]));