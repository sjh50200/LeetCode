/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buy = 0;
    let sell = 1;
    
    // buy for문 O(n*n) 실패
    // for(let i = 0; i < prices.length - 1; i++) {
    //     buy = prices[i];
    //     for(let j = i + 1; j < prices.length; j++) {
    //         sell = prices[j];
    //         const profit = sell - buy;
    //         if(profit > max) max = profit; 
    //     } 
    // }
    
    while (sell < prices.length) {
        if(prices[buy] < prices[sell]) {
            const profit = prices[sell] - prices[buy];
            max = Math.max(profit, max);
        } else {
            buy = sell;
        }
        sell++;
    }
    
    return max;
};