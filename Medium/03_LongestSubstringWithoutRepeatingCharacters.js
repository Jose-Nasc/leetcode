/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0
    let left = 0
    let substring = new Map()

    for(let right = 0; right < s.length; right++){
        while(substring.has(s[right])){
            substring.delete(s[left])
            left++
        }
        substring.set(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
}

// -------------------- TESTS --------------------

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
