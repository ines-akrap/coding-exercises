// Runtime: 56ms => 60.21%
// Memory: 33.9MB => 100%

const subtractProductAndSum = (n) => {
    const digits = n.toString().split('');
    const sum = digits.reduce((a,b) => parseInt(a)+parseInt(b));
    const product = digits.reduce((a,b) => a*b);
    return product - sum;
};

// Runtime: 52ms => 81.17%
// Memory: 33.9MB => 100%

const subtractProductAndSum = (n) => {
    let sum = 0;
    let product = 1;
    while(n) {
       const digit = n % 10;
        sum += digit;
        product *= digit;
        n = (n - digit)/10;
    }
    return product - sum;
};
