// MEMOIZATION
// Runtime: 52ms => 71.58%
// Memory: 34MB => 12%

const climbStairs = (n, mem = {}) => {
    if (mem[n]) {return mem[n]};
    if (n <= 2) return n;
    return mem[n] = climbStairs(n - 1, mem) + climbStairs(n - 2, mem);
};
