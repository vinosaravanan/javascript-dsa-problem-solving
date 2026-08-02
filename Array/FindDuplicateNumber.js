////////      How do you find the duplicate number on a given integer array?
///    input - nums = [1, 3, 4, 2, 2];
///    output - 2

/////// /// Approach 1 : Using Nested Loops
function FindDublicateWithNestedLoops(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
}
console.log(
  "FindDublicateWithNestedLoops |",
  FindDublicateWithNestedLoops([1, 3, 4, 2, 2]),
);
