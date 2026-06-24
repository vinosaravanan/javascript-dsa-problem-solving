/////          How do you count the occurrence of a given character in a string?
//// input - programming , target - g
//// output - 2

let str = "programming";
let target = "g";

function CountOccurrenceStr(str, target) {
  let count = 0;
  str = str.toLowerCase();
  target = target.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      count++;
    }
  }
  return count;
}
console.log(
  "CountOccurrenceStr with For Of Loop",
  CountOccurrenceStr(str, target),
);
