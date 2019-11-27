// Runtime: 48ms => 88%
// Memory 33.6MB => 100%

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

 const solution = (isBadVersion) => {
     return function(n) {
         let min = 1;
         let max = n;
         let bad = -1;
         while (min<max) {
             let middle = Math.floor((min+max)/2);
             if (isBadVersion(middle)) {
                 bad = middle;
                 max = middle-1;
             } else {
                 min = middle + 1;
             }
         }
         return bad;
     }
}
