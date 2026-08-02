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
////// Approach 2 : Using Sorting
function FindDublicateWithSorting(nums){
   for (let i = 1; i < nums.length; i++) {
       if (nums[i] === nums[i - 1]) {
          return nums[i]
       }
   }
}
console.log(
  "FindDublicateWithSorting |",
 FindDublicateWithSorting([1, 3, 4, 2, 2]),
);
//////////// Approach 3 : Using  Using Set method
function FindDublicateWithSetMethod(nums){
    let seen = new Set();
    for (const num of nums) {
         if (seen.has(num)) {
            return num
         }
         seen.add(num)
    }
}
console.log(
  "FindDublicateWithSetMethod |",
 FindDublicateWithSetMethod([1, 3, 4, 2, 2]),
);





