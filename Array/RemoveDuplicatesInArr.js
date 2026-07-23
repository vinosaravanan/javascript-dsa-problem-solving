/////              How do remove duplicates from a given array?
////  input - [1, 1, 2, 3, 2, 4, 5, 5]
////  output - [1, 2, 3, 4, 5]

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
