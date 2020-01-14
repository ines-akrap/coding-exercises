// Runtime: 76ms => 58%
// Memory: 36.3MB => 33%

const addDigits = (num) => {
    let digits = num.toString().split('');
    while (digits.length > 1) {
        let sum = digits.reduce((acc, digit) => parseInt(acc) + parseInt(digit));
        digits = sum.toString().split('');
    }
    return digits;
};

// DIGITAL ROOT METHOD
// digital root of n = 1 + ( (n - 1) % 9 )
// Runtime: 68ms => 90%
// Memory: 35.1MB => 100%

const addDigits = (num) => {
    if (isNaN(num) || num === 0) {return 0};
    if (num < 10) {return num};
    return 1 + ((num-1) % 9);
};
