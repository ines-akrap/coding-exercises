// Runtime: 60ms => 97%
// Memory: 37.2MB => 67%

const isPalindrome = (s) => {
    if (s.length <= 1 || !s) {return true;}
    let newString = s.toLowerCase().replace(/\s/g,'');
    let start = 0;
    let end = newString.length-1;
    while (start !== end && start<end) {
        while (!isAlphaNumeric(newString[start]) && start<end) {
            start++;
        }
        
        while (!isAlphaNumeric(newString[end]) && end>start) {
            end--;
        }
        
        if(start === end) {return true;}
        if(newString[start] != newString[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};
    
const isAlphaNumeric = (char) => {
    if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
        return true;
    }
    return false;
}
