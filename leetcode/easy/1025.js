// Runtime: 56ms => 50%
// Memory: 34.2MB => 20%

const divisorGame = (N) => {
    const chosen = [];
    let lastNum = N;
    while (N !== 0) {
        let newNum = chooseNumber(N);
        N = N - newNum;
        if (N <= 0) {break;}
        chosen.push(N);
        if (lastNum === N) { break; }
        lastNum = N;
    }
    console.log(chosen);
    return (chosen.length % 2);
};

const chooseNumber = (num) => {
    let newNum = 1;
    while (num % newNum && newNum < num) {
        newNum++;
    }
    return newNum;
};

// MATH
const divisorGame = (N) => {
    return N%2 === 0;
};