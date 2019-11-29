// Runtime: 76ms => 70%
// Memory: 37MB => 77%

const merge = (intervals) => {
  if (intervals.length < 2) {return intervals;}
  intervals.sort((a,b) => {return a[0]-b[0];});
  let previous = [];
  const newIntervals = [];
  for (let current of intervals) {
    if(previous[1] >= current[0]) {
      previous[1] = Math.max(current[1], previous[1]);  
    } else {
        newIntervals.push(current);
        previous = current; 
    }
  }
  return newIntervals;
};
