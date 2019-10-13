const checkPossibility = (nums) => {
    let save = 0;
    let index = 0;
    for (let i = 0; i<nums.length; i++) {
      if (nums[i] > nums[i+1] ) {
        save++;
        index = i;
      }
    }
    if (save > 1) {return false;}
    if (save === 0) {return true;}
    if (index === 0 || index === (nums.length - 2)) {return true;}
    if (nums[index - 1] <= nums[index + 1]) {return true;}
    if (nums[index - 1] <= nums[index] && nums[index] <= nums[index+2]) {return true;}
    return false;
}; 