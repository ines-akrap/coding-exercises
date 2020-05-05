// Runtime: 48ms => 98.83%
// Memory: 35.2MB => 100%

const heightChecker = (heights) => {
    const sorted = [...heights].sort((a,b) => a-b);
    let diff = 0;
    for (let i=0; i<heights.length; i++) {
        if (heights[i] === sorted[i]) {continue;}
        diff = diff+1;
    }
    return diff;
};
