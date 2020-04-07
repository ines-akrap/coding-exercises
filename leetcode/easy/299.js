// Runtime: 52ms => 99%
// Memory: 35.8MB => 50%

const getHint = (secret, guess) => {
    const map = {};
    let bulls = 0;
    let cows = 0;
    for (let i=0; i<guess.length; i++) {
        let sec = secret[i];
        let gue = guess[i];
        if (sec === gue) {
            bulls++;
            continue;
        }
        if ((map[gue] > 0) || (map[sec] < 0)) { cows++ };
        map[sec] = (map[sec] || 0) + 1;
        map[gue] = (map[gue] || 0) - 1;
    }
    return `${bulls}A${cows}B`;
}
