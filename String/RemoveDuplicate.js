//////             how do remove the duplicate character from String?
////// input - 'abcabc' | output - 'abc'
/////  input - 'hello'  | output - 'Helo'

//// 4 approches

//// 1. Using Set (Fastest and Clean)
function RemoveDuplicateWithSet(str) {
  return [...new Set(str)].join("");
}
console.log(
  "Using Set (Fastest and Clean) |",
  RemoveDuplicateWithSet("abcabc"),
);

//// 2. Using a Set + for...of (More Control And Recommended For Interview)
function RemoveDublicateWithSetAndForOf(str) {
  let seen = new Set();
  for (let i = 0; i < str.length; i++) {
    if (!seen.has(str[i])) {
      seen.add(str[i]);
    }
  }
  return [...seen].join("");
}
console.log(
  "RemoveDublicateWith-Set-And-ForOf |",
  RemoveDublicateWithSetAndForOf("abcabc"),
);

//// 3. Using an Object as a Frequency Map
function RemoveDublicateWithObj(str) {
  let seen = {};
  let result = "";
  for (const char of str) {
    if (!seen[char]) {
      seen[char] = true;
      result += char;
    }
  }
  return result;
}
console.log("RemoveDublicateWith-Obj |", RemoveDublicateWithObj("abcabc"));

//// 4. Using reduce() (Functional Style);
function RemoveDublicateWithReduceMethod(str) {
  return [...str].reduce((acc, char) => {
       return acc.includes(char) ? char : acc + char
  }, '')
}
console.log('RemoveDublicateWith-Reduce-Method |', RemoveDublicateWithReduceMethod('abcabc'));
