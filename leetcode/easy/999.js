const numRookCaptures = (board) => {
    let rookPosX = -1;
    let rookPosY = -1;
    for (let i=0; i<8; i++) {
        rookPosY = board[i].indexOf('R');
        if (rookPosY != -1) {
            rookPosX = i;
            break;
        }
    }
    if (rookPosX === -1 || rookPosX ===-1) return 0;
    let pawns = 0;
    pawns+= checkLeft(board[rookPosX], rookPosY);
    pawns+= checkRight(board[rookPosX], rookPosY);
    pawns+= checkUp(board, rookPosX, rookPosY);
    pawns+= checkDown(board, rookPosX, rookPosY);
    return pawns;
};

const checkLeft = (row, pos) => {
    let i = pos-1;
    while (i != 0) {
        if (row[i] === 'p') return 1;
        else if (row[i] === '.') i--;
        else return 0;
    }
    return 0;
}

const checkRight = (row, pos) => {
    let i = pos+1;
    while (i < row.length) {
        if (row[i] === 'p') return 1;
        else if (row[i] === '.') i++;
        else return 0;
    }
    return 0;
}

const checkUp = (board, x, y) => {
    let row = x-1;
    while (row != 0) {
        if (board[row][y] === 'p') return 1;
        else if (board[row][y] === '.') row--;
        else return 0;
    }
    return 0;
}

const checkDown = (board, x, y) => {
    let row = x+1;
    while (row < board.length) {
        if (board[row][y] === 'p') return 1;
        else if (board[row][y] === '.') row++;
        else return 0;
    }
    return 0;
}