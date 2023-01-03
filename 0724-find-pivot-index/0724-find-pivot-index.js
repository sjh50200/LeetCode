/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for (let pivotIndex = 0; pivotIndex < nums.length; pivotIndex++) {
        let leftSum = 0;
        let rightSum = 0;
        // leftSum 계산하기
        for(let leftSumIndex = 0; leftSumIndex < pivotIndex; leftSumIndex++) {
            leftSum += nums[leftSumIndex];
        }
        // rightSum 계산하기
        for(let rightSumIndex = nums.length - 1; rightSumIndex > pivotIndex; rightSumIndex--) {
            rightSum += nums[rightSumIndex];
        }
        // 비교
        if(leftSum === rightSum) return pivotIndex
    }
    return -1;
};