// Video stitching
// runtime: 72ms
// mem usage: 33.8 MB

const videoStitching = (clips, T) => {
    const clipsToCover = [];
    let bestMatch;
    let currentEnd = [];
    let maxEnd = [];

    for (let i=0; i<clips.length; i++) {
        if (clips[i][0] !== 0) {continue;}
        if (maxEnd < clips[i][1]) {
            maxEnd = clips[i][1];
            bestMatch = clips[i];
        }
    }
    currentEnd = maxEnd;
    clipsToCover.push(currentEnd);
    bestMatch = 0;

    while (currentEnd < T) {
        for (let i=0; i<clips.length; i++) {
            if (clips[i][0] > currentEnd) {continue;}
            if (maxEnd < clips[i][1]) {
                maxEnd = clips[i][1];
                bestMatch = clips[i];
            }
        }
        if (!bestMatch) { return -1;}
        clipsToCover.push(bestMatch);
        bestMatch = 0;
        currentEnd = maxEnd;
    }
    return clipsToCover.length;
};