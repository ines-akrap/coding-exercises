// Runtime: 52ms => 95%
// Memory: 34MB => 96%

const intersect = (nums1, nums2) => {
    const longer = nums1.length > nums2.length ? nums1 : nums2;
    const shorter = nums1.length > nums2.length ? nums2 : nums1;
    const intersection = [];
    
    for (let num of shorter) {
      let index = longer.indexOf(num);
       if (index !== -1) {
          intersection.push(num);
           longer.splice(index,1);
       } 
    }
    
    return intersection;
};
