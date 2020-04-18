// Runtime: 60ms => 34%
// Memory: 33.7MB => 91%

const uniquePaths = (m, n) => {
    const matrix = [];
    for(i=0; i<n; i++) {
        matrix.push([]);
    }
    matrix[0][0] = 1;
    for (let i=1; i<m; i++) {
        matrix[0][i] = 1;
    }
    for (let j=1; j<n; j++) {
        matrix[j][0] = 1;
    }
    
    for (let i=1; i<m; i++) {
        for (let j=1; j<n; j++) {
            matrix[j][i] = matrix[j][i-1] + matrix[j-1][i];
        }
    }
    return matrix[n-1][m-1];
};
