const rob = (nums) => {
    if (nums.length === 0) {return 0};
    if (nums.length === 1) {return nums[0]};
    if (nums.length === 2) {return Math.max(nums[0], nums[1])};
    
    let maxPenultimo = nums[0];
    let maxUltimo = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        const maxCurrent = Math.max(nums[i] + maxPenultimo, maxUltimo);
        maxPenultimo = maxUltimo;
        maxUltimo = maxCurrent;
    }
    return maxUltimo;
};