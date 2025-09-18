/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trimStart();
    if (s.length === 0) return 0;

    let result = [];
    let sign = 1;
    let i = 0;

    if (s[0] === "-") {
        sign = -1;
        i++;
    } else if (s[0] === "+") {
        i++;
    }

    let regex = /[0-9]/;
    for (; i < s.length; i++) {
        if (!regex.test(s[i])) break;
        result.push(s[i]);
    }

    if (result.length === 0) return 0;

    let res = sign * parseInt(result.join(""));
    let minInt = -(2 ** 31);
    let maxInt = 2 ** 31 - 1;

    if (res > maxInt) return maxInt;
    if (res < minInt) return minInt;
    return res;
};

// -------------------- TESTS --------------------

console.log(myAtoi("42"))
console.log(myAtoi("   -042"))
console.log(myAtoi("1337c0d3"   ))
console.log(myAtoi("0-1"))
console.log(myAtoi("words and 987"))