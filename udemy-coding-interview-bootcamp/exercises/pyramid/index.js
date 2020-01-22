// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let row=0; row<n; row++){
        let level = '';

        for (let column=0; column<2*n-1; column++) {
            if ((n-1-row) <= column && column <= (n-1+row)) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

//Recursive option
function pyramidS1(n, row=0, level='') {
    if (row === n) {return;}
    if (level.length === (2*n-1)) {
        pyramid(n++);
    }

    const col = level.length;
    const add = ((n-1-row) <= col && col <= (n-1+row)) ? '#' : ' ';
    pyramid(n, row, level + add);
}

function pyramidS0(n) {
    const size = 2*n - 1;
    const array = new Array(size).fill(' ');
    let i = n-1;
    let j = i;
    while (i>=0 && j<=size) {
        array[i] = '#';
        array[j] = '#';
        console.log(array.join(''));
        i--;
        j++;
    }
}

module.exports = pyramid;
