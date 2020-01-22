// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// 2 for loops -> O(n^2)
// possible with recursion

function steps(n) {
    const steps = new Array(n).fill(' ');
    for (let i=0; i<n; i++) {
        steps[i] = '#';
        console.log(steps.join(''));
    }
}

module.exports = steps;
