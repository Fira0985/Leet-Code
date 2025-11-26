/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Initialize closest sum
    let closest = nums[0] + nums[1] + nums[2];

    // Step 3: Loop through the array
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        // Step 4: Two-pointer search
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // Step 5: Update closest if needed
            if (Math.abs(currentSum - target) < Math.abs(closest - target)) {
                closest = currentSum;
            }

            // Step 6: Move pointers
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // Perfect match
                return currentSum;
            }
        }
    }

    // Step 7: Return final closest value
    return closest;
};
