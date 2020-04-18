// Runtime: 60ms => 60%
// Memory: 35.3MB => 100%

const uniquePathsWithObstacles = (obstacleGrid) => {
    const m = obstacleGrid[0].length;
    const n = obstacleGrid.length;
    
    obstacleGrid[0][0] = obstacleGrid[0][0] ? 0 : 1;
    for(i=1; i<m; i++) {
        if (obstacleGrid[0][i] === 1) {
          obstacleGrid[0][i] = 0;  
            continue;
        };
        obstacleGrid[0][i] = obstacleGrid[0][i-1];
    };
    for(j=1; j<n; j++) {
        if (obstacleGrid[j][0] === 1) {
          obstacleGrid[j][0] = 0;
            continue;
        };
        obstacleGrid[j][0] = obstacleGrid[j-1][0];
    };
    for(let i=1; i<m; i++) {
       for(let j=1; j<n; j++) {
           if (obstacleGrid[j][i] === 1) {
               obstacleGrid[j][i] = 0;
               continue;
           }
           obstacleGrid[j][i] = obstacleGrid[j-1][i] + obstacleGrid[j][i-1];
       } 
    }
    return obstacleGrid[n-1][m-1];
};
