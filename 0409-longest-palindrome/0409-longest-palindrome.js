/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map();
    // 모든 글자들의 개수에 대한 map 생성.
    Array.from(s).forEach((value) => {
        if(!map.get(value)) map.set(value, 1);
        else map.set(value, map.get(value) + 1)
    })

    // 만약 map size가 1이라면 그대로 반환
    if(map.size === 1) return map.get(s[0]);
    
    let result = 0;
    let isOddCounted = false; // 홀수 한 번의 기회를 사용했는지 체크
    
    // 홀수일 때 한 번은 대칭을 위해 개수 그대로 더하고 나머지는 -1 해서 짝수로 맞춰서 넣기
    // 짝수일 때는 개수 그대로 더한다.
    map.forEach((value) => {
        if(value % 2 === 0) {
            result += value;
        }
        else {
            if(!isOddCounted) {
                result += value;
                isOddCounted = true;
            } else {
                result += value - 1;
            }
        }
    });
    
    return result;
};