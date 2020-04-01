// Runtime: 144ms => 15%
// Memory: 36.5MB => 60%

const singleNumber = (nums) => {
    if (nums.length === 0) {return 0;}
    while(nums.length) {
        const num = nums.pop();
        const index = nums.indexOf(num);
        if (index === -1) {return num;}
        nums.splice(index,1);
    }
};

// XOR SOLUTION
// Runtime: 52ms => 95%
// Memory: 35.4MB => 78.85%
const singleNumber = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[0] = nums[0] ^ nums[i];
    }
    return nums[0];
};

