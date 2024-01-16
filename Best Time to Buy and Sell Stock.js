/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else {
      min = prices[0];
    }
    let max = prices[i];

    for (let j = i + 1; j < prices.length; j++) {
      prices[j] > max ? (max = prices[j]) : (max = prices[i]);
      let profit = max - min;
      return profit;
    }
  }
}
