// Runtime: 52ms => 75%
// Memory: 33.9MB => 35%

const letterCombinations = (digits) => {
    if (digits.length === 0) {return [];}
    let map = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y', 'z']
    }
    const result = [];
    
    const helper = (current, index) => {
        if (current.length === digits.length) {
            result.push(current);
            return;
        }
        const key = digits[index];
        if (key === '1') {return;}
        let i = 0;
        while (i<map[key].length) {
            helper(current+map[key][i], index+1);
            i++;
        }
    }
    
    helper('', 0);
    return result;
};
