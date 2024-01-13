/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // let temp = [];
  // let i = 0;
  // let j = 1;
  let second_number;
  for (let i = 0; i < nums.length; i++) {
    second_number = target - nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (second_number === nums[j]) {
        return [i, j];
      }
    }
  }
};
