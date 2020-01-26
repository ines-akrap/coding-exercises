// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Memoization => O(n)
function fib(n, map = {0:0, 1:1}) {
    if (n<2) {return map[n];}
    return map[n] = fib(n-1, map) + fib(n-2, map); 
}

// Recursive solution => O(2^n)
function fibRecursive(n) {
    if (n < 2) {return n};
    return fib(n-1) + fib(n-2);
}

// Iterative solution => O(n)
function fibIterative(n) {
    const fibonacci = [0,1];
    for (let i=2; i<=n; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci[fibonacci.length-1];
}

module.exports = fib;
