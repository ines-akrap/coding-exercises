// Runtime: 56ms => 98.58%
// Memory: 34.9MB => 100%

const rotate = (nums, k) => {
    nums.unshift(...nums.splice(nums.length - k)); 
};
