// Runtime: 100ms => 90%
// Memory: 41.4MB => 80%

const leastInterval = (tasks, n) => {
    if (n<1) {return tasks.length;}

    const map = {};
    for(let task of tasks) {
        map[task] = map[task] + 1 || 1;
    }

    const values = Object.values(map).sort(sortByValue);
    const maxValue = values[values.length - 1] - 1;
    let idleCount = maxValue * n;
    for (let i = values.length-2; i>=0 && values[i]>0; i--) {
        idleCount -= Math.min(values[i], maxValue);
    }
    return idleCount > 0 ? tasks.length + idleCount : tasks.length;
}

const sortByValue = (a,b) => {return a-b;}
