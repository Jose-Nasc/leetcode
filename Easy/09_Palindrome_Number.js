/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    function check(num){
        let left = 0
        let right = num.length - 1
        while(left < right){
            if(num[left] !== num[right]) return false
            left++
            right--
        }
        return true
    }

    return check(x.toString())
};

// -------------------- TESTS --------------------

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))