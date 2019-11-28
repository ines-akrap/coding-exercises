// Runtime: 64ms => 85%
// Memory: 35.8MB => 100% 

const canAttendMeetings = (intervals) => {
    if (intervals.length < 2) {return true;}
    intervals.sort((a,b) => {return a[0]-b[0]});
    for (let i = 1; i<intervals.length; i++) {
        if (intervals[i][0] < intervals[i-1][1]) {
            return false;
        }
    }
    return true;
};
