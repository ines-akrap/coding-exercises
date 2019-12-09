// Runtime: 92ms => 82.29%
// Memory: 41.9MB => 100%

// Divide and conquer

const addOperators = (num, target) => {
    const result = [];

    const helper = (num, target, diff, sum, current) => {
        if (num.length === 0 && sum === target) {
            result.push(current);
            return;
        }

        for (let i=1; i<=num.length; i++) {
            let cur = num.substr(0,i);
            if (cur.length > 1 && cur[0] === '0') {return};
            let next = num.substr(i);
            const n = parseInt(cur);
            if (n > Number.MAX_SAFE_INTEGER) {return;}
            if (current.length > 0) {
                helper(next, target, n, sum+n, current+'+'+cur);
                helper(next, target, -n, sum-n, current+'-'+cur);
                helper(next, target, n*diff, (sum-diff) + (diff * n), current+'*'+cur);
            } else {
              helper(next, target, n, n, cur);  
            }
        }
    }
    helper(num, target, 0, 0, '');

    return result;
}