//////        How to rotate an array left and right by a given number K?

// K times rotation means rotating an array exactly K times 
// The number K K determines how many steps (or positions) the elements in the array are shifted.

// Example: Rotate an Array Left by K=2 K = 2 K=2
// If the array is:

// [1,2,3,4,5][
// After 1 left rotation:
// [2,3,4,5,1]
// After 2 left rotations:
// [3,4,5,1,2]

// Example: Rotate an Array Right by K=2K = 2K=2
// If the array is:
// [1,2,3,4,5]
// After 1 right rotation:
// [5,1,2,3,4]
// After 2 right rotations:
// [4,5,1,2,3]

//    input - const arr = [1, 2, 3, 4, 5, 6, 7];
//               const K = 3;
//         Output:
//          Left Rotation by K   
//          K: [4, 5, 6, 7, 1, 2, 3] 
//           Right Rotation by K
//          K: [5, 6, 7, 1, 2, 3, 4]



/// Approche 1 : Using Slice method 
function RotateArrLeftAndRight(arr, k, direaction){
   let n = arr.length;
   if (direaction === 'Left') {
    return [...arr.slice(k), ...arr.slice(0, k)]
   } else if(direaction === "Right"){
      return [...arr.slice(n-3), ...arr.slice(0, n-3)]
   }
     
}
console.log('RotateArrLeftAndRight-Left |', RotateArrLeftAndRight([1, 2, 3, 4, 5, 6, 7], 3, 'Left'));
console.log('RotateArrLeftAndRight-Right |', RotateArrLeftAndRight([1, 2, 3, 4, 5, 6, 7], 3, 'Right'));




///// Approche 2: Using Arr method Pop, push, shipt, unshipt

function RotateArrLeftandRightWithBuildMethod(arr, k, direaction){
  for (let i = 0; i < k; i++) {
   if (direaction === "left") {
      arr.push(arr.shift())
   }
   if (direaction === "Right") {
      arr.push(arr.pop())
   }
  }
  return arr
}
console.log('RotateArrLeftandRightWithBuildMethod-Left |', RotateArrLeftandRightWithBuildMethod([1, 2, 3, 4, 5, 6, 7], 3, 'Left'));
console.log('RotateArrLeftandRightWithBuildMethod-Right |', RotateArrLeftandRightWithBuildMethod([1, 2, 3, 4, 5, 6, 7], 3, 'Right'));
