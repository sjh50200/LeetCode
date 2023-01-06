/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const createMapArray = (string) => {
      const mapArray = [];
      const map = new Map();
      // {key : char, value : index array} 구조의 map 생성
      // O(n) 순회
      for(let i = 0; i < string.length; i++) {
            if(map.has(string[i])) {
                map.get(string[i]).push(i);
            } else {
                map.set(string[i], [i]);
            }
      }
      // Map을 순회하며 array를 생성
      // O(n) 순회
      map.forEach((indexArray) => mapArray.push(indexArray));
      return mapArray;
  }
  
  const sMapArray = createMapArray(s);
  const tMapArray = createMapArray(t);
    
    // console.log(sMapArray[1].toString() !== tMapArray[1].toString())
  for(let i = 0; i < sMapArray.length; i++) {
      if(sMapArray[i].toString() !== tMapArray[i].toString()) return false;
  }
  return true;
};