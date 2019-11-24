// Runtime: 60ms => 40%
// Memory: 35MB => 30%

const isValid = (s) => {
    if (s.length === 0) {return true;}
    if (s.length === 1) {return false;}
    if (s.length % 2 !== 0) {return false;}
    const stack = [];
    const map = {'}':'{', ']':'[', ')':'('};
    for(let char of s.split('')) {
        if (Object.keys(map).includes(char)) {
            if (stack[stack.length-1] === map[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

// V2
// Runtime: 44ms => 99.91%
// Memory: 33.9MB => 63.33%

const isValid = (s) => {
    if (s === "") {return true;}
  
    const open = ['(', '[', '{']
    const closed = [')', ']', '}']
    let current;
    let stack = [];
  
    for (let char of s) {
      if (closed.includes(char)) {
        current = stack.pop();
        if (!current || current !== open[closed.indexOf(char)]) {return false;}
      } else {
        stack.push(char);
      }
    }
  
    return stack.length === 0;
  };