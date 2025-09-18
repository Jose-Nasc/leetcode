/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let matrix = []
    let count = 0
    let reverse = false
    if(numRows == 1 || s.length < numRows) return s
    for(let i = 0; i < numRows; i++){
        matrix[i] = []
    }
    for(let i = 0; i < s.length; i++){
        matrix[count].push(s[i])
        reverse ? count-- : count++
        if(count === numRows - 1 || count === 0) reverse = !reverse
    }
    return matrix.flat().join('')
    
};

// -------------------- TESTS --------------------

console.log(convert("PAYPALISHIRING", 3))
console.log(convert("PAYPALISHIRING", 4))
console.log(convert("A", 1))