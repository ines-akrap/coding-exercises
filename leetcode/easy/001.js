// Runtime: 104ms => 50%
// Memory: 34.8MB => 50%

const twoSum = (nums, target) => {
    for(let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
};

// One pass complement
const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++) {
        const index = nums.indexOf(target - nums[i]);
        if (index !== -1 && index !== i) {
            return [i,index].sort((a,b) => {return a-b});
        }
    }
};

// With hash map => better runtime, worse mem
const twoSum = (nums, target) => {
    const map = {};
    for (let i=0; i<nums.length; i++) {
        const compl = target - nums[i];
        if (map[compl] !== undefined) {return [map[compl], i];}
        map[nums[i]] = i;
    }
}