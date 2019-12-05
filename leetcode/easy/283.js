// Runtime: 64ms => 66%
// Memory: 35.8MB => 36%

const moveZeroes = (nums) => {
    for (let i=0; i<nums.length-1; i++) {
        if (nums[i] !== 0) {continue;}
        for (let j = i+1; j<nums.length; j++) {
            if (nums[j] === 0) {continue;}
            nums[i] = nums[j];
            nums[j] = 0;
            break;
        } 
    }
    return nums;
};

const moveZeroes = (nums) => {
    let position = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === 0) {continue;}
        nums[position] = nums[i];
        if (i>position) {
            nums[i] = 0;
        }
        position++;
    }
    return nums;
};