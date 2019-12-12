// Runtime: 56ms => 97.5%
// Memory: 34.9MB => 66.6%

const nextPermutation = (nums) => {
    if (nums.length < 2) {return nums;}

    let i = nums.length - 2;
    while (i>0 && nums[i] >= nums[i+1]) {i--;}
    if (i === 0 && nums[i] >= nums[i+1]) {
        return nums.sort((a,b) => {return a-b;});
    }
    let j = nums.length - 1;
    while (nums[i] >= nums[j]) {j--;}
    swap(nums, i, j);

    i= i+1;
    j = nums.length - 1;
    while (i<j) {
        swap(nums, i, j);
        i++;
        j--;
    }
    return nums;
}

const swap = (nums, a, b) => {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}
