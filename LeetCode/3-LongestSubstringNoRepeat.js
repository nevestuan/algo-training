/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let ans = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
      if (map.has(s.charAt(j))) {
        i = Math.max(map.get(s.charAt(j)), i);
      }
      ans = Math.max(ans, j - i + 1);
      map.set(s.charAt(j), j + 1);
    }
    return ans;
  };
  
  console.log('test1', lengthOfLongestSubstring('abcbaca'))
  console.log('test2', lengthOfLongestSubstring('bacadea'))
  console.log('test3', lengthOfLongestSubstring(''))
  console.log('test4', lengthOfLongestSubstring('bbbbb'))
  console.log('test5', lengthOfLongestSubstring('pwwkew'))