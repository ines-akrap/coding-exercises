// Runtime: 48ms => 86.87%
// Memory: 33.8MB => 100%

const tribonacci = (n, mem={}) => {
    if (n<=1) {return n;}
    if (n === 2) { return 1;}
    if (mem[n]) {return mem[n]};
    return mem[n] = tribonacci(n-1, mem) + tribonacci(n-2, mem) + tribonacci(n-3, mem);
};
