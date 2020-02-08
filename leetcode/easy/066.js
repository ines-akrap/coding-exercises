// Runtime: 52ms => 86.80%
// Memory: 33.7MB => 90%

const plusOne = (digits) => {
    const len = digits.length;
    digits[len - 1] = digits[len - 1] + 1;
    for (let i=0; i<digits.length-1; i++) {
        if (digits[len - 1 - i] < 10) {break;}
        digits[len - 1 - i-1] = digits[len - 1 - i-1] + 1; 
        digits[len - 1 - i] = digits[len - 1 - i] % 10;
    }
    if (digits[0] > 9) {
       digits[0] = digits[0] % 10;
        digits.unshift(1);
    }
    return digits;
};
