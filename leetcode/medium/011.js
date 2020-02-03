// Brute force: O(n2), O(1)
// Runtime: 676ms => 30%
// Memory: 35.5 => 66%

const maxArea = (height) => {
    let max = 0;
    for (let i=0; i<height.length; i++) {
        for (let j=i+1; j<height.length; j++) {
            const area = Math.min(height[i], height[j]) * (j-i);
            max = Math.max(max, area)
        }
    } 
    
    return max;
};

// Two pointers approach: O(n), O(1)
// Runtime: 56ms => 89%
// Memory: 35.6MB => 50%

const maxArea = (height) => {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        area = Math.min(height[left], height[right]) * (right-left);
        max = Math.max(max, area);
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    
    return max;
};
