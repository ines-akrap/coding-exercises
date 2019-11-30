// Runtime: 84ms => 61%
// Memory: 42MB => 76%

const productExceptSelf = (nums) => {
    const result = [];
    let left = 1;
    let right = 1;

    for (let i=0; i<nums.length-1; i++ ) {
        result[i] = left;
        left *= nums[i];
    }

    for (let j=nums.length-1; j>=0; j-- ) {
        result[j] *= right;
        right *= nums[j];
    }
    return result;
}
