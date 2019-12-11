// Runtime:
// Memory: 

const threeSum = (nums) => {
    if (nums.length === 0) {return [];}
    if (nums.length < 3) {return [];}
    
    const results = [];
    const targetSum = 0;
    nums.sort((a,b) => {return a-b;});
    
    for (let i=0; i<nums.length-2; i++) {
        if(nums[i] > targetSum) {break;}
        if(i>0 && nums[i] === nums[i-1]) {continue;}

        let j = i+1;
        let k = nums.length-1;
        while (j<k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === targetSum) {
                results.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j+1]) {j++;}
                while (nums[k] === nums[k-1]) {k--;}
                j++;
                k--;
            } else if (sum > targetSum) {
                k--;
            } else {
                j++;
            }
        }
    }
    return results;
}
