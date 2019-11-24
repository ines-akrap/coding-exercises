// Runtime: 48ms -> 90%
// Memory: 33.9MB -> 46.15%

const pascalTriangle = (numRows) => {
    if (!numRows) {return [];}
    const triangle = [[1]];
    let row = 1;
    while (row < numRows) {
        triangle.push([1]);
        for (let i=1; i<triangle[row-1].length; i++) {
            triangle[row][i] = triangle[row-1][i-1] + triangle[row-1][i];
        }
        triangle[row].push(1);
        row++;
    }
    return triangle;
};
