// Runtime: 132ms => 41%
// Memory: 55MB => 50%

const findDuplicates = (nums) => {
    const map = {};
    nums.forEach((num) => {
        map[num] = map[num] + 1 || 1;
    });
    return Object.keys(map).filter((key) => map[key] === 2);
};
