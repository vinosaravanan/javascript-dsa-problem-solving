//////////     How do you find the largest and smallest number in an unsorted integer 
///////// input = const nums = [3, 5, 1, 9, 2, 8];
//////// output = Largest: 9  ,  Smallest: 1;

function FindLargestAndSmallestWithLoops(nums){
    let largest = nums[0];
    let smallest = nums[0];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) {
        largest = nums[i]
      }
      if (nums[i] < smallest) {
        smallest = nums[i]
      }
       
    }
    return {largest, smallest}

}
console.log('FindLargestAndSmallestWithLoops |', FindLargestAndSmallestWithLoops([3, 5, 1, 9, 2, 8]));
