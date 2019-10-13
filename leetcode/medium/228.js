const makeRange = (start, stop) => {
    if (start === stop) {
        return `${start}`;
    }
    return `${start}>${stop}`;
}

function init(input) {
    const output = [];
    let rangeStart = input[0];
    let rangeEnd = rangeStart;
    let i = 1;

    while (i<=input.length) {
        const current = input[i];
        if (current === rangeEnd + 1) {
            rangeEnd++;
            i++;
            continue;
        }
        
        output.push(makeRange(rangeStart, rangeEnd));
        rangeStart = current;
        rangeEnd = rangeStart;
        i++;
    }
    return output;
}