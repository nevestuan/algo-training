/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let total = 0;
    let n = timeSeries.length;
    if(n === 0)
        return 0;
    for(let i=0; i < n-1; i++){
        total += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    }
    return total + duration;
};