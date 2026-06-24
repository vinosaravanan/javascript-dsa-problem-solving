/////          How do you count the occurrence of a given character in a string?
//// input - programming , target - g
//// output - 2
//// 4 Approche

/// 1. Using a for...of Loop (Best for Interviews)
let str1 = "programming";
let target1 = "g";

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
  CountOccurrenceStr(str1, target1),
);

/// 2. Using Regex (Short & Powerful)
let str2 = 'banana';
let target2 = 'a'
function countCharwithUsingRegex(str, target) {
    const matches = str.match(new RegExp(target, "g"));
    return matches ? matches.length : 0;
}
console.log('countChar with usingRegex', countCharwithUsingRegex(str2, target2));

