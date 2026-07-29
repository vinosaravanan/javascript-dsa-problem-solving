//////////       How do you search for a target value in a rotated array?
///////// const nums = [4, 5, 6, 7, 0, 1, 2];
///////// const target = 5;

function SearchTargetValue(arr, target){

  for (let i = 0; i < arr.length; i++) {
     if (arr[i] === target) {
        return i
     }
    
  }
  return - 1

}

console.log('SearchTargetValue |', SearchTargetValue([4, 5, 6, 7, 0, 1, 2], 5));
