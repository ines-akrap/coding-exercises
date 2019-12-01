// Runtime: 56ms => 95%
// Memory: 37.2MB => 75%

const fizzBuzz = (n) => {
    const newString = [];
    for (let i=1; i<=n; i++) {
        if (i%3 === 0 && i%5 === 0) {
            newString.push('FizzBuzz');
        } else if(i%3 === 0) {
            newString.push('Fizz');
        } else if (i%5 === 0) {
            newString.push('Buzz');
        } else {
            newString.push('' + i);
        }
    }
    return newString;
};
