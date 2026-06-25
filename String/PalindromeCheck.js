/////         How do you check if a given string is a  palindrome ?

///// A **palindrome** is a word or sentence that reads the **same backward as forward**,
// like: `"madam"`, `"racecar"`, `"abba"`

//// input - "madam" | output - true;
//// input - "hello" | output - false;

//// 3 Approches

//// 1. Two-Pointer Technique (Best for Interviews)

function CheckPalindrom(str) {
  let left = 0;
  let right = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[left] !== str[right]) {
      return false;
    }
  }
  return true;
}

console.log('CheckPalindrom with Two-Pointer Technique',CheckPalindrom("madam"));
console.log('CheckPalindrom with Two-Pointer Technique',CheckPalindrom("hello"));
