// Runtime: 56ms
// Memory: 34.5MB

const leftMostColumnWithOne = (binaryMatrix) => {
    const [rows, columns] = binaryMatrix.dimensions();
    let min = -1;
    for (let i = 0; i< rows; i++) {
        let left = 0;
        let right = (min === -1) ? columns-1 : min - 1;
        let timeout = 0;

        while(left < right) {
            const midIndex = Math.floor((left + right) / 2);
            const mid = binaryMatrix.get(i, midIndex);
            if (mid === 1 && binaryMatrix.get(i, midIndex - 1) === 0) {
                min = midIndex;
                break;
            };
            if (mid === 1) {
                right = midIndex - 1;
            } else {
                left = midIndex + 1;
            };
        };
        if (binaryMatrix.get(i, left)) { min = left;}
    }
    
    return min;
};
