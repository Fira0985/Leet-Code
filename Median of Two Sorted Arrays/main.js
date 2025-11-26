/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    var number
    let combine = nums1.concat(nums2)
    var sortedArray = combine.sort((a,b) => a - b)

    if (sortedArray.length % 2 == 0){
        number = (sortedArray[sortedArray.length/2] + sortedArray[sortedArray.length/2 - 1])/2
    } else{
        number = sortedArray[(sortedArray.length +1)/2]
    }
    return number
}

arr = [20,21,23,24]
arr2 = [6,7,8,9]

var value = findMedianSortedArrays(arr,arr2)
console.log(value)