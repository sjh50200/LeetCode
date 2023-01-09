/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map();
    Array.from(s).forEach((value) => {
        if(!map.get(value)) map.set(value, 1);
        else map.set(value, map.get(value) + 1)
    })
    console.log(map);
    
    if(map.size === 1) return map.get(s[0]);
    
    let result = 0;
    let isOneCounted = false;
    map.forEach((value) => {
        if(value % 2 === 0) {
            result += value;
        }
        else {
            if(!isOneCounted) {
                result += value;
                isOneCounted = true;
            } else {
                result += value - 1;
            }
        }
    });
    
    return result;
};