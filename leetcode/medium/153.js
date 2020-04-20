// Runtime: 48ms => 94%
// Memory: 33.8MB => 70%

const findMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const midpoint = Math.floor((left + right) / 2);
        if (nums[midpoint] > nums[right]) {
            left = midpoint + 1;
        } else {
            right = midpoint;
        };
    };
    return nums(left);
};
