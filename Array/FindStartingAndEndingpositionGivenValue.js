//// Given an array of integers sorted in ascending order,find the starting and ending position of a  given value.
// input = [5, 7, 7, 8, 8, 10];
//  target = 8;
/// output - [3, 4]


/// Approche 1 : using Loop 

function FindStartAndEndPositionInArr(nums, target){
 let start = -1; end = -1;
 for (let i = 0; i < nums.length; i++) {
     if (nums[i] === target) {
         if (start === -1) {
            start = i
         }
         end = i
     }    
 }

return {start, end}
}
console.log('FindStartAndEndPositionInArr |', FindStartAndEndPositionInArr([5, 7, 7, 8, 8, 10], 8));


//// Approche 2 : Using Build-in Method

function FindpositionWithBuilInMthod(nums, target){
 let start = nums.indexOf(target);
 let end = nums.lastIndexOf(target);
return {start, end}
}
console.log(' FindpositionWithBuilInMthod |',  FindpositionWithBuilInMthod([5, 7, 7, 8, 8, 10], 8));
