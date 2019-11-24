// BRUTE FORCE SOLUTION
// Runtime: 984ms => 28%
// Memory: 42.1MB => 89%

const dailyTemperatures = (T) => {
    return T.map((temp, index) => {
        if (index === T.length) { return 0;}
        let dayWaited = 0;
        index++;
        while(index<T.length) {
            dayWaited++;
            if (T[index] > temp) {
                return dayWaited;
            }
            index++; 
        }
        return 0;
    });
};

// USING STACK ALGORITHM 
// Runtime: 120ms => 100%
// Memory: 42.5MB => 67%

const dailyTemperatures = (T) => {
    const result = new Array(T.length).fill(0);
    const stack = [];
    for (let i=0; i<T.length; i++) {
        while(stack.length !== 0 && T[i] > T[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = i-index;
        }
        stack.push(i);
    }
    return result;
};