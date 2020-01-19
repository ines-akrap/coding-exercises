// Runtime: 1780ms => 26%
// Memory: 43.8MB => 100%

const nextLargerNodes = (head) => {
    const greaterArray = [];
    while (head) {
        let pointer = head;
        let value = pointer.val;
        let greater = 0;
        while (pointer) {
            if (pointer.val > value) {
                greater = pointer.val;
                break;
            }
            pointer = pointer.next;
        }
        greaterArray.push(greater);
        head = head.next;
    }
    return greaterArray;
};

// Making alg faster using array instead of LL
// Runtime: 460ms => 43%
// Memory: 44.2MB => 100%

const nextLargerNodes = (head) => {
    if (!head) return [];
    if (!head.next) return [0];

    const values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    
    const greaterArray = new Array(values.length).fill(0);
    for (let i=0; i<values.length; i++) {
        for (let j=i+1; j<values.length; j++) {
            if (values[j] > values[i]) {
                greaterArray[i] = values[j];
                break;
            }
        }
    }

    return greaterArray;
};
