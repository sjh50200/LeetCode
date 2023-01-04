/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const pivot = Array.from(s);
    let tempArray = t;
    const indexArray = [];
    
    for (let i = 0; i < s.length; i++) {
        const index = tempArray.indexOf(pivot[i]);
        console.log(index);
        if(index === -1) return false;
        tempArray = tempArray.slice(index + 1, tempArray.length);
        console.log('tempArray', tempArray);
    }
    
    return true;
};