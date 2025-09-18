// Note: My solution is O(n³) which is not good. I'll return later to optimize :)

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = "";
    function isPalindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j >= i; j--) {
            if (isPalindrome(i, j) && (j - i + 1) > longest.length) {
                longest = s.substring(i, j + 1);
            }
        }
    }

    return longest;
};

// -------------------- TESTS --------------------

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
