//////////     How do you find the largest and smallest number in an unsorted integer
///////// input = const nums = [3, 5, 1, 9, 2, 8];
//////// output = Largest: 9  ,  Smallest: 1;


///// approach 1: Using Loops
function FindLargestAndSmallestWithLoops(nums) {
  let largest = nums[0];
  let smallest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }

  return { largest, smallest };
}

console.log(
  "FindLargestAndSmallestWithLoops |",
  FindLargestAndSmallestWithLoops([3, 5, 1, 9, 2, 8]),
);

///// approach 1: Using Max And Min
function FindLargestAndSmallestWithMaxandMin(nums){
  let largest = Math.max(...nums);
  let smallest = Math.min(...nums);
  return {largest, smallest}
}
console.log('FindLargestAndSmallestWithMaxandMin |', FindLargestAndSmallestWithMaxandMin([3, 5, 1, 9, 2, 8]));
