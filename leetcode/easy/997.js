// Runtime: 100ms -> 73%
// Memory: 43.3MB -> 100%

const findJudge = (N, trust) => {
    const peopleTrust = new Array(N).fill(0);
    const personTrusts = new Array(N).fill(0);
    trust.forEach((pair) => {
        peopleTrust[pair[1]-1]++;
        personTrusts[pair[0]-1]++;
    });
    for (let i=0; i<N; i++) {
        if ((peopleTrust[i] === (N-1)) && (personTrusts[i] === 0)) {
            return i+1;
        }
    }
    return -1;
};