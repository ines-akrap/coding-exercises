// Runtime: 48ms => 92%
// Memory => 33.7MB => 100%

const fib = (N) => {
    let fibonacci = [0, 1];
    for (let i=2; i<=N; i++) {
        sum = fibonacci[i-1] + fibonacci[i-2];
        fibonacci.push(sum);
    }
    return fibonacci[N];
};

// MEMOIZATION 
// Runtime: 52ms => 78%
// Memory: 34MB => 45%

const fib = (N, memoization = {}) => {
    if (memoization[N]) {return memoization[N]};
    if (N <= 1) return N;
    return memoization[N] = fib(N - 1, memoization) + fib(N - 2, memoization);
};