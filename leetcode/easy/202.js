// Runtime: 56ms => 95%
// Memory: 34.8 => 94%

const isHappy = (n) => {
    let maxIterations = 100;
    let happy = n;
    while (happy != 1 && maxIterations) {
        let newNum = 0;
        while (happy >= 1) {
            newNum += Math.pow((happy%10), 2);
            happy = Math.floor(happy/10);
        }
        happy = newNum;
        maxIterations--;
    }
    if (maxIterations) {return true};
    return false;
}