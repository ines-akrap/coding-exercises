// Runtime: 76ms => 99.31%
// Memory: 40.5MB => 100%

const networkDelayTime = (times, N, K) => {
    const maxTimes = new Array(N).fill(Number.MAX_SAFE_INTEGER);
    maxTimes[K-1] = 0;
    let changed;
    for (let i=0; i<N; i++) {
        changed = false;
        for(const [start, target, t] of times) {
            if (maxTimes[start - 1] === Number.MAX_SAFE_INTEGER) {continue;}
            if (maxTimes[target - 1] > maxTimes[start - 1] + t) {
               maxTimes[target - 1] = maxTimes[start - 1] + t;
                changed = true;
            }
        }
        if (!changed) {break;}
    }
    const res = Math.max(...maxTimes);
    return (res === Number.MAX_SAFE_INTEGER) ? -1 : res;
};
