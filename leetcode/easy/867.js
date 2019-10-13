const transpose = (matrix) => {
    return matrix[0].map((value, index) => matrix.map((row) => row[index]));
};