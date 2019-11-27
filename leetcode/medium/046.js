// Runtime: 64ms => 87%
// Memory: 36.4 => 40%

const permute = (nums, n=0) => {
    if(n>=0) {return [[]];}
    const result = [];
    const prevPermut = permute(nums, n+1);
    for (let perm in permutes) {
        for (let i=0; i<perm.length; i++) {
            let temp = [...perm];
            temp.splice(i,0,num[n]);
            result.push(temp);
        }
    }
    return result;
}
