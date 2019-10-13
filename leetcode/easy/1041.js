const isRobotBounded = (instructions) => {
    let pos = [0,0];
    let side = 0;
    const positions = [];
    const circle = [];

    //no move
    if (instructions.indexOf('G') === -1) {return true;}

    let i=0;
    while (i<100) {
        let j = i % instructions.length;
        switch (instructions[j]) {
            case 'L':
                side = (side + 1) % 4;
                break;
            case 'R':
                side = (side % 4) - 1;
            case "G":
                pos = move(pos, side);
                if (instructions[i+1 % instructions.length] === 'G') { break;}
                let currentPositionHash = 10*pos[0] + 5*pos[1];
                let curentPositionInArray = positions.lastIndexOf(currentPositionHash);
                if (curentPositionInArray !== -1) {
                    if (circle.length > 2) {
                        let elementMinusOne = positions[curentPositionInArray - 1];
                        let elementMinusTwo = positions[curentPositionInArray - 2];
                        let lastCircle = circle[circle.length - 1];
                        let lastCircleMinusOne = circle[circle.length - 2];
                        if (elementMinusOne === lastCircle && elementMinusTwo === lastCircleMinusOne) {return true};
                    }
                    circle.push(currentPositionHash);
                }
                positions.push(currentPositionHash);
        }
        i++;
    }
    return false;             
}

const move = (position, side) => {
    switch (side) {
        case 0:
            position[1]++;
            break;
        case 1:
            position[0]--;
            break;
        case 2:
            position[1]--;
            break;
        case 3:
            position[0]++;
            break;
    }
    return position;
}