// Runtime: 92ms => 85%
// Memory: 38.8MB => 45%

const sortArrayByParity = (A) => {
    for (let i=0; i<A.length; i++) {
        const isEven = i%2 === 0;
        if(isEven && A[i]%2 === 0) {continue;}
        if(!isEven && A[i]%2 !== 0) {continue;}
        let j = i+1;
        while (j<A.length) {
            if(A[j]%2 === 0 && isEven || A[j]%2 !== 0 && !isEven) {
                let temp = A[i];
                A[i] = A[j];
                A[j] = temp;
                break;
            }
            j++;
        }
    }
    return A;
};