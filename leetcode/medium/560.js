// Runtime: 84ms =>75%
// Memory: 43MB => 25%

const subarraySum = (nums, k) => {
    const map = {};
    let sum = 0;
    map[sum] = 1;
    let result = 0;
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        if (map[sum-k]) {result += map[sum-k]};
        map[sum] = map[sum]+1 || 1;
    }
    return result;
  };