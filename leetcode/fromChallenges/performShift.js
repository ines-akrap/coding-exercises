const stringShift = (s, shift) => {
    let left = 0;
    let right = 0;
    for(let i=0; i<shift.length; i++) {
        if (shift[i][0] == 0) {left += shift[i][1];}
        if (shift[i][0] == 1) {right += shift[i][1];}
    }
    let totalShift = left - right;
    const direction = Math.sign(totalShift);
    totalShift = Math.abs(totalShift);
    totalShift = totalShift % s.length;
    return (direction > 0) ? shiftLeft(s, totalShift) : shiftRight(s, totalShift);
};

const shiftLeft = (string, amount) => {
    return string.substring(amount) + string.substring(0, amount);
}

const shiftRight = (string, amount) => {
    const index = string.length - amount;
    return string.substring(index) + string.substring(0, index);
}
