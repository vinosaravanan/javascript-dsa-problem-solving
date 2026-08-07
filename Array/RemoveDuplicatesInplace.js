///////     How do you remove duplicates from an array in place?

////////////// input -  const nums = [2, 3, 2, 3, 5, 6, 5];
/////////////  output - Modified Array: [2, 3, 5, 6]
/////////////            Length: 4

/// Approche: 1 using nested loops
function RemoveDublicateInplace(nums){
    for (let i = 0; i < nums.length; i++) {
       for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
             nums.splice(j, 1);
             j--
          }
       }      
    }
    return nums
}
console.log('RemoveDublicateInplace |', RemoveDublicateInplace([2, 3, 2, 3, 5, 6, 5]));
