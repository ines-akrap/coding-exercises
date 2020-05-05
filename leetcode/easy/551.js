// Runtime: 56ms => 56%
// Memory: 34MB => 100%

const checkRecord = (s) => {
    let late = 0;
    let absent = 0;
    for (let i = 0; i<s.length; i++) {
        if (s[i] === 'L') {
            if (late === 2) {
                return false;
            } else {
                late++;
                continue;
            }
        }
        late = 0;
        if (s[i] === 'P') { continue; }
        if (absent) {
            return false;
        } else {
            absent++;
        }
    }
    return true;
};
