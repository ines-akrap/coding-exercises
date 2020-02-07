// Runtime: 68ms => 82.5%
// Memory: 35.5MB => 100%

const multiply = (num1, num2) => {
    if (num1 === '0' || num2 === '0') {return '0'};
    const l1 = num1.length;
    const l2 = num2.length;
    const result = new Array(l1 + l2 - 1).fill(0);
    
    for (let i=0; i<l1; i++) {
        for (let j = 0; j<l2; j++) {
            result[i+j] += +num1[l1-1-i] * +num2[l2-1-j];
        }
    }
    
    for (let i=0; i<result.length-1;i++) {
        if (result[i] < 10) {continue;}
        result[i+1] += Math.floor(result[i] / 10);
        result[i] = result[i] % 10;
    }
    
    return result.reverse().join('');
};
