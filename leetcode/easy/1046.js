// Runtime: 48ms => 98.42%
// Memory: 34.9MB => 100%

const lastStoneWeight = (stones) => {
    while (stones.length > 1) {
        stones.sort((a,b) => {return b-a});
        const a = stones.shift();
        const b = stones.shift();
        const smashRes = smash(a, b);
        if (smashRes) {stones.push(smashRes);}
    }
    return stones.length > 0 ? stones : 0;
};

const smash = (a,b) => {
    if (a==b) {return 0;}
    return Math.abs(a-b);
}


