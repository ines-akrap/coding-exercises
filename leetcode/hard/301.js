// Runtime: 128ms => 35%
// Memory: 37.5MB => 100%

const removeInvalidParentheses = (s) => {
    if (s.length === 0) {return [""];}
    let max = 0;
    const res = [];
    
    const helper = (string, current, countLeft, maxLeft) => {
       if (string === "") {
           if(countLeft === 0 && current != '') {
               max = Math.max(max, maxLeft);
               if (max === maxLeft && res.indexOf(current) === -1) {
                   res.push(current);
               }
           }
           return;
       } else if (string[0] === '(') {
           helper(string.substr(1), current+string[0], countLeft+1, maxLeft+1);
           helper(string.substr(1), current, countLeft, maxLeft);
       } else if (string[0] === ')') {
           if (countLeft > 0) {
            helper(string.substr(1), current+string[0], countLeft-1, maxLeft);
           }
           helper(string.substr(1), current, countLeft, maxLeft);      
        } else {
            helper(string.substr(1), current+string[0], countLeft, maxLeft);
        }
    }
    
    helper(s, '', 0,0);
    return res.length ? res : [''];
};