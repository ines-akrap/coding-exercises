// Runtime: 72ms
// Memory: 42.4MB

const myReverseQuickSort = (array) => {
    if (array.length < 2) { return array;}
    
    const larger = [];
    const equal = [];
    const smaller = [];
    
    const ross = array[Math.floor(Math.random() * array.length)];
    
    for (let num of array) {
        if (num > ross) {
            larger.push(num);
        } else if (num < ross) {
            smaller.push(num);
        } else {
            equal.push(num);
        }
    }
    return [...myReverseQuickSort(larger), ...equal, ...myReverseQuickSort(smaller)];
}
