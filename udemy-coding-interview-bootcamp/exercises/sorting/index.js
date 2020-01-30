// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<(arr.length - i - 1); j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

// "prove me wrong" alg
function selectionSort(arr) {
    for (let i=0; i<arr.length; i++) {
        let indexOfMin = i;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const midIndex = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0,midIndex)), mergeSort(arr.slice(midIndex)));
}

function merge(left, right) {
    const sorted = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
