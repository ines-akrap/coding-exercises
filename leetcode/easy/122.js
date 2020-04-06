// Runtime: 60ms => 57%
// Memory: 35.3MB => 85%

const maxProfit = (prices) => {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[i - 1]) {continue;}
        profit += prices[i] - prices[i - 1];
    }
    return profit;
};
