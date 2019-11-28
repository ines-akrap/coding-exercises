// Runtime: 76ms
// Memory: 38.8MB

const minMeetingRooms = (intervals) => {
    if(intervals.length < 2) {return intervals.length;}
    const starts = intervals.map((a) => a[0]).sort((a,b) => {return a-b});
    const ends = intervals.map((a) => a[1]).sort((a,b) => {return a-b});
    
    let rooms = 0;
    let end = 0;
    for (let i=0; i < intervals.length; i++) {
        if (starts[i] < ends[end]) {
            rooms++;
        } else {
            end++;
        }
    }
    return rooms;
};