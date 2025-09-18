// Note: I failed to optimize O(m+n), but it passes all tests. I'm return later to optimize :)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let output = []
    let median = 0
    for(let i = 0; i < nums1.length || i < nums2.length; i++){
        if(typeof nums1[i] === 'number') output.push(nums1[i])
        if(typeof nums2[i] === 'number') output.push(nums2[i])
    }
    output = output.sort((a,b) => a - b)
    let len = output.length
    if(len % 2 == 0) median = (output[len/2] + output[len/2 - 1] ) / 2
    else median = output[Math.floor(len/2)]
    return median
};

// -------------------- TESTS --------------------

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2], [3,4]))
