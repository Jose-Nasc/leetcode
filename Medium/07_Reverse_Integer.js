/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x.toString()
    let n = x.length
    const output = new Array(n).fill("");
    let left = 0
    if(x[0] == '-') {
        output[0] = "-"
        left = 1
    }
    for(let i = left, j = n - 1; i < n ; i++, j--){
        output[i] = x[j]
    }
    let result = parseInt(output.join(""))
    if(result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0
    return result
};

// -------------------- TESTS --------------------

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))