// Runtime: 44ms => 98.8%
// Memory: 33.9MB => 33%

const search = (nums, target) => {
    if (nums.length === 0) {return -1;}
    const range = [0, nums.length-1];
    
    const isAscending = (index1, index2) => {
        if (index1 === index2 ) return true;
        return nums[index1] < nums[index2];
    } 
    const isInRange = (index1, index2) => {
        if (index1 === index2 ) return nums[index2] === target;
        return nums[index2] >= target && nums[index1] <= target;
    }
    
    while (range[1] >= range[0]) {
        if (range[1] === range[0] + 1) {
            if (nums[range[0]] === target) { return range[0];}
            if (nums[range[1]] === target) { return range[1];}
        }
        const midPoint = Math.floor((range[1] + range[0]) / 2);
        if (nums[midPoint] === target) { return midPoint;}
        if (isAscending(range[0], midPoint)) {
            if (isInRange(range[0], midPoint)) {
                range[1] = midPoint - 1;
            } else {
                range[0] = midPoint + 1;
            }
        } else {
           if (isInRange(midPoint, range[1])) {
                range[0] = midPoint + 1;
            } else {
                range[1] = midPoint - 1;
            } 
        }
    }
    return -1;
};
