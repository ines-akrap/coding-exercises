// Runtime: 176ms => 91.37%
// Memory: 45MB => 96.55%

const isPalindrome = (x) => {
    let originalNumber = x;
    let palindromeNumber = 0;
    
    while(x > 0) {
        let digit = x % 10;
        
        palindromeNumber *= 10;
        palindromeNumber += digit;
        
        x -= digit;
        x /= 10;
    }    

    return originalNumber == palindromeNumber;
};
