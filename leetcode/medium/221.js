// Runtime: 64ms => 96%
// Memory: 40MB => 25%

const maxSquare = (matrix) => {
    if (matrix == null || matrix.length === 0) {return 0;}
    if (matrix.length === 1) {return Math.max(...matrix[0]);}

    const height = matrix.length;
    const width = matrix[0].length;

    let max = 0;
    let count = [];
    for (let i=0; i<height; i++) {
        let row = [];
        if (i === 0) {
            for (let j=0; j<width; j++) {
                row.push(parseInt(matrix[0][j]));
                if (!max && !parseInt(matrix[0][j])) {max = 1;}
            }
        } else {
            row = new Array(width).fill(0);
            row[0] = parseInt(matrix[i][0]);
            if (row[0]) {max=1;}
        }
        count.push(row);
    }

    for (let i=1; i<height; i++) {
        for (let j=1; j<width; j++) {
            if (!parseInt(matrix[i][j])) {
                count[i][j] = 0;
                continue;
            }
            count[i][j] = Math.min(count[i][j-1], count[i-1][j], count[i-1][j-1]) + 1;
            max = count[i][j] > max ? count[i][j] : max;
        }
    }
    return max*max;
}
