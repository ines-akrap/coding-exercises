// Runtime: 56ms
// Memory: 36.8MB

const findNumbers = (nums) => {
    return nums.filter((num) => {
        return num.toString().split('').length % 2 === 0;
    }).length;
};
