// Runtime:
// Memory:

const canJump = (nums) => {
    let index = 0;
    let max = 0;
    let target = nums.length - 1;

    while (index <= target) {
        max = Math.max(max, index + nums[index]);

        if (target <= index) {
            return true;
        }

        if (target > index && nums[index] === 0) {
            return false;
        }

        index++;
    }
    return false;
}
