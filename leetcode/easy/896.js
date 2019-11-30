// Runtime: 64ms => 97.5%
// Memory: 40.360%

const isMonotonic = (A) => {
    if (A.length === 0) {return false;}
    if (A.length === 1) {return true;}
    let i = 0;
    while (A[i] === A[i+1]) {
        i++;
    }
    
    if (A[i] < A[i+1] && i<A.length-1) {
      while (A[i] <= A[i+1]){
          i++;
      }   
    } else {
        while (A[i] >= A[i+1] && i<A.length-1){
          i++;
      }
    }
    return (i === A.length-1);
};
