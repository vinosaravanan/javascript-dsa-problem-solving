/////              How do remove duplicates from a given array?
////  input - [1, 1, 2, 3, 2, 4, 5, 5]
////  output - [1, 2, 3, 4, 5]

/// Approche 1 pure loop with Obj
function RemoveDublicateWithObj(arr) {
  let unique = [];
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      unique.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  return unique;
}
console.log(
  "RemoveDublicateWith-Loop-Obj",
  RemoveDublicateWithObj([1, 1, 2, 3, 2, 4, 5, 5]),
);

/// Aproche 2 Using Set method  Set is a collection of unique values.

const setarr = [1, 1, 2, 3, 2, 4, 5, 5];

const setRes = [...new Set(setarr)] // set method only take uniqie value 
console.log('set method ', setRes);

