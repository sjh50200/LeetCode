/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const isCapital = (string) => (string.charCodeAt(0) >= 65 && string.charCodeAt(0) <= 90);
    const isSmall = (string) => (string.charCodeAt(0) >= 97 && string.charCodeAt(0) <= 122);
    const wordArray = Array.from(word);
    
    if(wordArray.length === 1) return true;

    if(isCapital(wordArray[0])) {
        return wordArray.slice(1, wordArray.length).every((item) => isCapital(item)) ||
        wordArray.slice(1, wordArray.length).every((item) => isSmall(item))
    } else {
        return wordArray.slice(1, wordArray.length).every((item) => isSmall(item))
    }
};