// getMin returns the smallest number currently on stack

// S1: double stack -> each value matches min
function MinStack() {
    const stack = []
    const mins = []
    
    const push = x => {
        const min = getMin();
        const newMin = min == null || x < min ? x : min; 
        stack.push(x);
        mins.push(newMin);
    }
    const pop = () => { stack.pop(); mins.pop(); };
    const top = () => stack[stack.length - 1];
    const getMin = () => mins[mins.length - 1];
    
    return {
        push,
        pop,
        top,
        getMin
    }
}
