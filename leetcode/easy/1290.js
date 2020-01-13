// Runtime: 40ms => 100%;
// Memory: 33.8MB => 100%

const getDecimalValue = (head) => {
    let binary = '';
    while (head) {
        binary += head.val;
        head = head.next;
    }
    return parseInt(binary, 2);
};

// Without parseInt
// Runtime: 52ms => 84.18%
// Memory: 33.9MB => 100%

const getDecimalValue = (head) => {
    let result = 0;
    while(head) {
        result = result*2 + head.val
        head = head.next
    }
    return result
};
