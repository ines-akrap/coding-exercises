// BRUTE
// Runtime: 288ms => 16.67%
// Memory: 41.4MB => 100%

const nextGreaterElements = (nums) => {
    return nums.map((num, index) => {
        let indexNext = index + 1;
        while (indexNext < index+nums.length) {
            const i = indexNext%nums.length;
            if (nums[i] > num) {return nums[i]};
            indexNext++;
        }
        return -1;
    }); 
};

// STACK SOLUTION
// Runtime:
// Memory: 