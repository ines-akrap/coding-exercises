// For the given integer N, print snake matrix such as (for N = 3):
// 1 2 3
// 6 5 4
// 7 8 9

// Input: A single integer N, 1 <= N <= 50.
// Output: A snake matrix NxN: N lines with N space-separated integers each.

const snakeMatrix = (N) => {
    console.log("test");
    const matrix = [];
    let current = 1;
    for(let i=1; i<=N; i++) {
        const newLine = [];
        let lineMax = current+N;
        if (i % 2) {
            while (current < lineMax) {
                newLine.push(current);
                current++;
            }
        } else {
            while (lineMax > current) {
                newLine.push(lineMax);
                lineMax--;
            }
            current = current + N;
        }
        matrix.push(newLine);
    }
    console.log(matrix);
    return matrix;
};

snakeMatrix(3);
