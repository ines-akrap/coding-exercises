// Runtime: 60ms => 70%
// Memory: 35.4MB => 74.07%

const maxProfit = (prices) => {
    let max = 0;
    let min = Infinity;

    for(let i=0; i<prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i]-min);
    }
    return max;
}
