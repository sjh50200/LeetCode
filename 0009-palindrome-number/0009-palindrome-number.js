/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringToArray = Array.from(x.toString());
    const length = stringToArray.length;
    const loop = (x % 2 === 0) ? length / 2 : Math.floor(length / 2);
    
    for(let i = 0; i < loop; i++) {
        if(stringToArray[i] !== stringToArray[length - (i + 1)]) return false;
    }
    return true;
};