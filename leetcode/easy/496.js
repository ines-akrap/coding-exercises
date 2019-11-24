// BRUTE FORCE
// Runtime: 60ms => 80%
// Memory: 35MB => 100%

const nextGreaterElement = (nums1, nums2) => {
    return nums1.map((num) => {
        const index = nums2.indexOf(num)
        if (index === -1) {return -1;}
        if (index === nums2.length-1) {return -1;}
        for (let i = index+1; i<nums2.length; i++) {
            if(nums2[i] > num) {
                return nums2[i];
            }
        } 
        return -1;
    })
};

// MAP VERSION
// Runtime: 60ms => 80%
// Memory: 34.4MB => 100%

const nextGreaterElement = (nums1, nums2) => {
    const map = {};
    nums2.forEach((num, index) => {
        let nextIndex=index+1;
        map[num] = -1;
        while(nextIndex<nums2.length) {
            if (nums2[nextIndex] > num) { 
                map[num] = nums2[nextIndex];
                break;
            }
            nextIndex ++;  
        }
    });
    return nums1.map((num) => map[num]);
};