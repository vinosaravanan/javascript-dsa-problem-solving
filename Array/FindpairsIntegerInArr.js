////////     How do you find all pairs of an integer array whose sum is equal to a given number?
//// const nums = [2, 4, 3, 7, 8, -1, 5, 0];
//// const target = 7;

//// Approach 1: brute Force
function FindAllpairsWithBruteForce(nums, target) {
  let pairList = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        pairList.push([nums[i], nums[j]]);
      }
    }
  }
  return pairList;
}
console.log(
  "FindAllpairsWithBruteForce",
  FindAllpairsWithBruteForce([2, 4, 3, 7, 8, -1, 5, 0], 7),
);

//// Approach 2: Math method
function FindpairWithMap(arr, target){
   let pairList = [];
   let seen = new Map();
   for (const num of arr) {
      let compliment = target - num
       if (seen.has(compliment)) {
          pairList.push([compliment, num])
       }
       seen.set(num, true)
   }
   return pairList
}
console.log('FindpairWithMap |', FindpairWithMap([2, 4, 3, 7, 8, -1, 5, 0], 7));
