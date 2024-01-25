/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  let numCopy = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (numCopy.has(nums[i])) {
      return true;
    }
    numCopy.add(nums[i]);
  }
  return false;
}
