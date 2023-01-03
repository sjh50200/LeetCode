/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((_, index) => (nums.slice(0, index + 1))).map(array => 
        array.reduce((acc, cur) => {
            return acc + cur;
        }, 0));
};