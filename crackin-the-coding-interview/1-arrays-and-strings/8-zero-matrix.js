// if element in MxN matrix is 0, entire row and column become 0 

const zeroMatrix = (matrix) => {
    const zeroRows = [];
    const zeroColumns = [];
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            if (matrix[i][j] !== 0) { continue; }
            if (!zeroRows.includes(i)) { zeroRows.push(i)};
            if (!zeroColumns.includes(j)) { zeroColumns.push(j)};
        }
    }

    matrix = setRows(matrix, zeroRows);
    matrix = setColumns(matrix, zeroColumns);
    return matrix;
}

const setRows = (matrix, rows) => {
    rows.forEach( row => {
        for (let i=0; i< matrix[row].length; i++) {
            matrix[row][i] = 0;
        }
    });
    return matrix;
}

const setColumns = (matrix, columns) => {
    columns.forEach( column => {
        for (let i=0; i< matrix.length; i++) {
            matrix[i][column] = 0;
        }
    });
    return matrix;
}

// TESTS

const testMatrix1 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ];
console.log(zeroMatrix(testMatrix1));