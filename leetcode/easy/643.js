// Runtime: 1452 ms -> 14%
// Memory: 42.9MB -> 100%

const findMaxAverage = (nums, k) => {
    let maxAverage;
    const limit = nums.length - k + 1;
    for (let i=0; i<limit; i++ ) {
        let j = 1;
        let newAverage = nums[i];
        while (j < k) {
            newAverage += nums[i+j];
            j++;
        }
        newAverage = newAverage / k;
        if (!maxAverage) {
            maxAverage = newAverage
            continue;
        }
        maxAverage = (newAverage > maxAverage) ? newAverage : maxAverage;
    }
    return maxAverage;
};

// SLIDING WINDOW SOLUTION
const findMaxAverage = (nums, k) => {
    let currSum = nums.slice(0 , k).reduce((r, n) => r + n, 0);
    let bestSum = currSum;
    for (let i = 1; i < nums.length - k + 1; i++) {
        currSum = currSum - nums[i - 1] + nums[i + k - 1]
        bestSum = Math.max(bestSum, currSum); // Max more readable, if faster
    }
    return bestSum / k;
};