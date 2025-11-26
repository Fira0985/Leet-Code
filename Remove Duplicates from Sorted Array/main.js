/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let length = nums.length
    let i = 0
    let rept = 1

    while (i < length) {
        if (i == 0){
            i++
        } else {
            if (nums[i-1] == nums[i]){
                rept = rept + 1
            } else if (nums[i-2] == nums[i] ){
                rept = 1
            }

            if (rept >= 3){
                nums[i] = 0
            }
            i++
        }
    }

    return (nums)
};

let number = [1,1,1,2,2,2,3,4,4,4,4,4]
let result = removeDuplicates(number)
console.log(result)